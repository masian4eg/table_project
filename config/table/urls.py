from django.urls import path

from .views import TableListCreate

urlpatterns = [
    path('table/', TableListCreate.as_view()),
]
