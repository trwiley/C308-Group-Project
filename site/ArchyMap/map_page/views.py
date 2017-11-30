from django.http import JsonResponse
from django.shortcuts import render
from django.http import HttpResponse
from django import template
from map_page.models import Artifact, Admin
# Create your views here.

def map_view(request):
    return render(request, 'map/map.html')

def get_data(request, *args, **kwargs):
    data = []
    artifacts = Artifact.objects.all()
    for artifact in artifacts:
        data.append({
            "lat": float(artifact.latitude),
            "lng": float(artifact.longitude),
        })
    # data = [{
    #     "lat": 41,
    #     "lng": -86,
    # }]
    return JsonResponse(data, safe=False)