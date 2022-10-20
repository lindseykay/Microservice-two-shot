from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json

from common.json import ModelEncoder
from .models import Shoe, BinVO
# Create your views here.

class BinVOEncoder(ModelEncoder):
    model = BinVO
    properties = ["closet_name", "import_href"]


class ShoeListEncoder(ModelEncoder):
    model = Shoe
    properties = [
        "manufacturer",
        "model_name",
        "color",
        ]

class ShoeDetailEncoder(ModelEncoder):
    model = Shoe
    properties = [
        "manufacturer",
        "model_name",
        "color",
        "picture_url",
        "bin",
    ]

    encoders = {
        "bin": BinVOEncoder(),
    }


@require_http_methods(["GET", "POST"])
#"GET" is for showing a list of all shoes, "POST" is for creating a new shoe
def api_list_shoes(request):
    if request.method == "GET":
        shoes = Shoe.objects.all()
        return JsonResponse(
            {"shoes": shoes},
            encoder=ShoeListEncoder,
        )
    else:
        content = json.loads(request.body)

        try:
            bin_href = content["bin"]
            bin = BinVO.objects.get(import_href=bin_href)
            content["bin"] = bin
        except BinVO.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid Bin Id"},
                status=400,
            )

        shoe = Shoe.objects.create(**content)
        return JsonResponse(
            shoe,
            encoder=ShoeDetailEncoder,
            safe=False,
        )

@require_http_methods(["GET", "DELETE"])
def api_show_shoe(request, pk):

    if request.method == "GET":
        shoe = Shoe.objects.get(id=pk)
        return JsonResponse(
            shoe,
            encoder=ShoeDetailEncoder,
            safe=False,
        )
    else:
        count, _ = Shoe.objects.filter(id=pk).delete()
        return JsonResponse({"deleted": count>0 })
