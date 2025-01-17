from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, 'index.html')

def home(request):
    return render(request, 'home.html')

def services(request):
    return render(request, 'services.html')

def login(request):
    return render(request, 'login.html')
