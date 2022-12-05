
from service_objects.services import Service
from django import forms
from django.core.mail import send_mail
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


class SendEmailsService(Service):
    email = forms.EmailField()
    stocks = None

    def process(self):
        email = self.cleaned_data['email']
        text = "Buy these stocks RIGHT NOW:\n\n"
        for stock in self.data['stocks']:
            text += f"{stock['symbol']} at ${float(stock['value'])} per stock\n"

        send_mail(
            "Today's Stocks from TO THE MOON!",
            text,
            "To The Moon!",
            [email],
            fail_silently=False
        )
        return True
