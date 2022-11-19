# Create your views here.
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.http import HttpResponse
from rest_framework import status


@api_view(['GET'])
def subscribe(request):
    return HttpResponse("hello world from subscribe")