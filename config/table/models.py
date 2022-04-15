from django.db import models
from datetime import datetime


class Table(models.Model):
    date = models.DateField(blank=False, default=datetime.now().strftime("%d.%m.%Y"))
    name = models.CharField(max_length=100)
    amount = models.IntegerField()
    distance = models.IntegerField()

    def __str__(self):
        return self.name
