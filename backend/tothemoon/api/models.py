from django.db import models


class SubscribeForm(models.Model):
    firstName = models.CharField("FirstName", max_length=30)
    lastName = models.CharField("LastName", max_length=30)
    email = models.CharField("Email", max_length=50, primary_key=True)

    def __str__(self):
        return self.email


class Stock(models.Model):
    name = models.CharField("Name", max_length=100)
    symbol = models.CharField("Symbol", max_length=4)
    value = models.DecimalField("Value", max_digits=40, decimal_places=20)
    createdDate = models.DateTimeField("CreatedDate", auto_now=True)

    def __str__(self):
        return self.symbol

