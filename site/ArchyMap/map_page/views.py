
from django.shortcuts import render
from django.http import HttpResponse
from django import template

# Create your views here.

def map_view(request):
    return render(request, 'map/map.html')