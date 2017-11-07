from django.conf.urls import url
from ArchyMap import views

urlpatterns = [
    url(r'^$', views.map_view, name='map'), ]