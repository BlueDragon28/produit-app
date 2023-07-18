from rest_framework.viewsets import ModelViewSet
from rest_framework.filters import SearchFilter

from .models import Produit
from .serializers import HREFProduitSerializer

class ProduitViewSet(ModelViewSet):
    serializer_class = HREFProduitSerializer
    queryset = Produit.objects.all()
    filter_backends = [SearchFilter]
    search_fields = ["name"]

