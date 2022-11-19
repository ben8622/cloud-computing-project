# Create your views here.
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.http import HttpResponse
from .serializers import SubscribeFormSerializer, StockSerializer
from .models import SubscribeForm, Stock
from rest_framework import status


@api_view(['POST'])
def subscribe(request):
    try:
        serializer = SubscribeFormSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        data = serializer.save()
        return Response(data=f"{data.email} subscribed!", status=status.HTTP_201_CREATED)
    except Exception as e:
        return Response(data=str(e.detail), status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def get_stocks(request):
    data = Stock.objects.order_by('-createdDate')[:3]
    serializer = StockSerializer(data, context={'request': request}, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def update_stocks(request):
    try:
        for v in request.data:
            serializer = StockSerializer(data=v)
            serializer.is_valid()
            errors = serializer.errors
            serializer.save()
        return Response(data=f"Stocks updated.", status=status.HTTP_200_OK)
    except Exception as e:
        return Response(status=status.HTTP_400_BAD_REQUEST)
