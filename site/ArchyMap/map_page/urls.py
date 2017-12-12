from django.conf.urls import url
from map_page import views

urlpatterns = [
    url(r'^$', views.map_view, name='map'),
    url(r'^artif_add', views.art_view, name = 'at'),
    url(r'^admin_view',views.admin_view, name='av')
]