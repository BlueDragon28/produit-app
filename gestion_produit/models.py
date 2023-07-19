from django.db import models
from django.db.models import Model
from django.core.validators import MinLengthValidator, MinValueValidator

class Produit(Model):
    """
    Modèle représentant un produit.
    Un produit est constitué d'un :
        - Nom,
        - Prix unitaire,
        - Quantité
    """

    name = models.CharField(max_length=300, null=False, unique=True, validators=[MinLengthValidator(3, "Le nom du produit doit contenir au moins 3 charactères")])
    prix_unitaire = models.DecimalField(null=False, max_digits=7, decimal_places=2)
    quantite = models.IntegerField(null=False, validators=[MinValueValidator(0, "La  quantité de produit doit être égale ou supérieur à 0")])

    class Meta:
        ordering = ["-id"]
