from django.conf.urls import url
from archymap import views

urlpatterns = [
    url(r'^$', views.map_view, name='map'), ]