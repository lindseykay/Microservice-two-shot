from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json

from common.json import ModelEncoder
from .models import Shoe, BinVO
# Create your views here.

class ShoeListEncoder(ModelEncoder):
    model = Shoe
    properties = ["manufacturer"]

@require_http_methods(["GET", "POST"])
#"GET" is for showing a list of all shoes, "POST" is for creating a new shoe
def api_list_shoes(request):
    if request.method == "GET":
        shoes = Shoe.objects.all()
        return JsonResponse(
            {"shoes": shoes},
            encoder=ShoeListEncoder,
        )
