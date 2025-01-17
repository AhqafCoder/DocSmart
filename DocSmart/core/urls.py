from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('home/', views.home, name='home'),
    path('services/', views.services, name='services'),
    path('login/', views.login, name='login'),
    path('about/', views.about, name='about'),


]
