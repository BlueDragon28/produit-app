from django.http import HttpResponse
from rest_framework.viewsets import ModelViewSet
from rest_framework.filters import SearchFilter
from pathlib import Path

from .models import Produit
from .serializers import HREFProduitSerializer


class ProduitViewSet(ModelViewSet):
    """
    Créer, récupérer, modifier, supprimer, rechercher un produit
    """

    serializer_class = HREFProduitSerializer
    queryset = Produit.objects.all()
    filter_backends = [SearchFilter]
    search_fields = ["name"]

GESTION_PRODUIT = Path(__file__).resolve().parent
index_html = GESTION_PRODUIT / "static/index.html"

def index_view(request):
    """
    Retourne l'index.html de l'application React
    """

    with open(index_html) as f:
        lines = f.readlines()

        content = ""
        for line in lines:
            content += line

    return HttpResponse(content.encode())
