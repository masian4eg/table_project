from django_filters import FilterSet
from .models import Table


class TableFilter(FilterSet):
    class Meta:
        model = Table
        fields = ('name', 'amount', 'distance')
