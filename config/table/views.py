from .models import Table
from .serializers import TableSerializer
from rest_framework import generics


class TableListCreate(generics.ListCreateAPIView):
    queryset = Table.objects.all()
    serializer_class = TableSerializer
