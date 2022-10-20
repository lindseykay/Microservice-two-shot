from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from common.json import ModelEncoder
from .models import Hat, LocationVO


class LocationVOEncoder(ModelEncoder):
    model = LocationVO
    properties = ["import_href", "name"]


class HatListEncoder(ModelEncoder):
    model = Hat
    properties = ["fabric", "color", "picurl", "location",]

    encoders = {"location": LocationVOEncoder(),}


class HatDetailEncoder(ModelEncoder):
    model = Hat
    properties = ["fabric", "stylename", "color", "picurl", "location",]

    encoders = {"location": LocationVOEncoder(),}


@require_http_methods(["DELETE", "GET"])
def api_detail_hat(request, pk):
    if request.method == "GET":
        hat = Hat.objects.get(id=pk)
        return JsonResponse(hat, encoder=HatDetailEncoder, safe=False)

    elif request.method == "DELETE":
        count, _ = Hat.objects.filter(id=pk).delete()
        return JsonResponse({"Deleted": count > 0})


@require_http_methods(["GET", "POST"])
def api_list_hats(request):
    if request.method == "GET":
        hats = Hat.objects.all()
        return JsonResponse(
            {"hats": hats},
            encoder=HatListEncoder,
        )
    else:
        
        content = json.loads(request.body)
        try:
            location_href = content['location']
            location = LocationVO.objects.get(import_href=location_href)
            content['location'] = location
        except LocationVO.DoesNotExist:
            return JsonResponse({
                "message": "Location DNE"
            }, status=400)

        hat = Hat.objects.create(**content)
        return JsonResponse(
            hat,
            encoder=HatDetailEncoder,
            safe=False,
        )

