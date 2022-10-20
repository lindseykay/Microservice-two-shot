from django.urls import path, include
from .views import api_list_hats, api_detail_hat

urlpatterns = [
    path('hats/', api_list_hats, name="api_list_hats"),
    path('hats/<int:pk>/', api_detail_hat, name="api_detail_hat"),
    path("locations/<int:location_id>/hats/", api_list_hats, name="api_locations_hats")
]
