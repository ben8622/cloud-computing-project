from django.urls import path

from . import views

urlpatterns = [
    path('subscribe/', views.subscribe, name='subscribe'),
    path('get-stocks/', views.get_stocks, name='get-stocks'),
    path('update-stocks/', views.update_stocks, name='update-stocks'),
    path('send-email/', views.send_email, name='send-email')
]