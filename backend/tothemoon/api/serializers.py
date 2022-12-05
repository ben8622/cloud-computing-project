from rest_framework import serializers
from .models import SubscribeForm, Stock


class SubscribeFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = SubscribeForm
        fields = ('firstName', 'lastName', 'email')


class StockSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stock
        fields = ('pk', 'name', 'symbol', 'value', 'createdDate')
