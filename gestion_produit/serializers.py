from rest_framework import serializers
from rest_framework.serializers import ModelSerializer

from .models import Produit

class ProduitSerializer(ModelSerializer):
    class Meta:
        model = Produit
        fields = ("id", "name", "prix_unitaire", "quantite")
