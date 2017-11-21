from django.conf.urls import url
from map_page import views

urlpatterns = [
    url(r'^$', views.get_data, name='map-data'),
]