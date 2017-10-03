from django.http import HttpResponse

def index(request):
    response = HttpResponse("<h1>This is a webpage</h1>")
    return response
