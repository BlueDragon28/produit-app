from rest_framework import serializers
from rest_framework.serializers import ModelSerializer, HyperlinkedModelSerializer

from .models import Produit

class HREFProduitSerializer(HyperlinkedModelSerializer):
    """
    Sérialiseur pour sérialiser/désérialiser en JSON le modèle Produit
    """

    href = serializers.HyperlinkedIdentityField(
        view_name="produits-detail",
        lookup_field="pk"
    )

    class Meta:
        model = Produit
        fields = ("href", "id", "name", "prix_unitaire", "quantite")

