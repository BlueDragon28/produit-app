from rest_framework.viewsets import ModelViewSet

from .models import Produit
from .serializers import ProduitSerializer

class ProduitViewSet(ModelViewSet):
    serializer_class = ProduitSerializer
    queryset = Produit.objects.all()
