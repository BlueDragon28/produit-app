from django.http import HttpResponse
from rest_framework.viewsets import ModelViewSet
from rest_framework.filters import SearchFilter
from pathlib import Path

from .models import Produit
from .serializers import HREFProduitSerializer

GESTION_PRODUIT = Path(__file__).resolve().parent
index_html= GESTION_PRODUIT / "static/index.html"

class ProduitViewSet(ModelViewSet):
    serializer_class = HREFProduitSerializer
    queryset = Produit.objects.all()
    filter_backends = [SearchFilter]
    search_fields = ["name"]

def index_view(request):
    with open(index_html) as f:
        lines = f.readlines()

        content = ""
        for line in lines:
            content += line

    return HttpResponse(content.encode())
