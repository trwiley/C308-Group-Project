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
            "name": str(artifact.name),
            "siteno": str(artifact.siteno),
            "description": str(artifact.description),
            "state": str(artifact.state),
            "county": str(artifact.county),
        })

    return JsonResponse(data, safe=False)

def art_view(request):
    return render(request, 'map/artifact.html')

def admin_view(request):
    return render(request, 'map/admin_screen.html')
