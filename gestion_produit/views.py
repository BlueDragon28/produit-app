from rest_framework.viewsets import ModelViewSet
from rest_framework.filters import SearchFilter

from .models import Produit
from .serializers import ProduitSerializer, HREFProduitSerializer

class ProduitViewSet(ModelViewSet):
    serializer_class = HREFProduitSerializer
    queryset = Produit.objects.all()
    filter_backends = [SearchFilter]
    search_fields = ["name"]

    def create(self, request, *args, **kwargs):
        self.serializer_class = ProduitSerializer
        return super().create(request, *args, **kwargs)

    def update(self, request, *args, **kwargs):
        self.serializer_class = ProduitSerializer
        return super().update(request, *args, **kwargs)

