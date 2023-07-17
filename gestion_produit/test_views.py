from decimal import Decimal
from django.urls import reverse
from rest_framework.test import APITestCase

from .models import Produit

class APIViewsTest(APITestCase):

    def setUp(self):
        self.produit = Produit(name="Chargeur USB-C", prix_unitaire=Decimal("14.99"), quantite=3)
        self.produit.save()

    def test_creer_produit(self):
        url = reverse("produits-list")
        data = {
            "name": "Cable USB",
            "prix_unitaire": "9.99",
            "quantite": 14
        }
        response = self.client.post(url, data, "json")
        self.assertEqual(response.status_code, 201)

    def test_modifier_produit(self):
        url = reverse("produits-detail", kwargs={"pk":self.produit.id})
        data = {
            "name": "Chargeur USB",
            "prix_unitaire": "9.99",
            "quantite": 19
        }
        response = self.client.put(url, data, "json")
        self.assertEqual(response.status_code, 200)
        responseData = response.data
        self.assertEqual(responseData["name"], data["name"])
        self.assertEqual(responseData["prix_unitaire"], data["prix_unitaire"])
        self.assertEqual(responseData["quantite"], data["quantite"])

    def test_liste_produit(self):
        for i in range(20):
            Produit(name=f"Produit {i}", prix_unitaire=f"{i}.99", quantite=i).save()

        url = reverse("produits-list")
        response_page1 = self.client.get(url + "?page_size=15")
        self.assertEqual(response_page1.status_code, 200)
        
        data_page1 = response_page1.data
        self.assertIsNotNone(data_page1["next"])
        self.assertEqual(data_page1["count"], 21)
        self.assertEqual(len(data_page1["results"]), 15)

        next_url = data_page1["next"]

        response_page2 = self.client.get(next_url)
        self.assertEqual(response_page2.status_code, 200)

        data_page2 = response_page2.data
        self.assertIsNone(data_page2["next"])
        self.assertIsNotNone(data_page2["previous"])
        self.assertEqual(len(data_page2["results"]), 6)

    def test_recherche_produits(self):
        noms = (
            "Cable USB",
            "Ampoule RGB"
        )

        for nom in noms:
            Produit(name=nom, prix_unitaire=Decimal("5.99"), quantite=1).save()

        url = reverse("produits-list")
        recherche = "Ampoule"
        response = self.client.get(url + f"?search={recherche}")
        self.assertEqual(response.status_code, 200)
        data = response.data
        self.assertEqual(data["count"], 1)
