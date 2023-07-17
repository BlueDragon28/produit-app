from decimal import Decimal
from django.test import TestCase

from .models import Produit

class ProduitTestCase(TestCase):

    def test_enregistrer_produit(self):
        produit = Produit(name="Chargeur USB-C", prix_unitaire=Decimal("24.99"), quantite=3)
        produit.save()

    def test_recuperer_produit(self):
        produit = Produit(name="Chargeur USB-C", prix_unitaire=Decimal("24.99"), quantite=3)
        produit.save()

        recuperer_produit = Produit.objects.get(pk=produit.id)
        self.assertEqual(recuperer_produit.name, produit.name)
        self.assertEqual(recuperer_produit.prix_unitaire, produit.prix_unitaire)
        self.assertEqual(recuperer_produit.quantite, produit.quantite)

