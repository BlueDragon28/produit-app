from django.http import HttpResponse
from rest_framework.viewsets import ModelViewSet
from rest_framework.filters import SearchFilter

from produit_app.settings import BASE_DIR

from .models import Produit
from .serializers import HREFProduitSerializer

index_html_basedir = BASE_DIR / "gestion_front/dist/index.html"

class ProduitViewSet(ModelViewSet):
    serializer_class = HREFProduitSerializer
    queryset = Produit.objects.all()
    filter_backends = [SearchFilter]
    search_fields = ["name"]

def index_view(request):
    with open(index_html_basedir) as f:
        lines = f.readlines()

        content = ""
        for line in lines:
            content += line

    return HttpResponse(content.encode())
