
from service_objects.services import Service
from django import forms
from django.core.mail import send_mail

class SendEmailsService(Service):
    email = forms.EmailField()
    content = forms.CharField()

    def process(self):
        send_mail(
            "Todays Stocks from TO THE MOON!",
            "<p>html message</p>",
            "from@tothemoon.com",
            ["benjaminjknight0987@gmail.com"],
            fail_silently=False
        )
        # send email
        return True
