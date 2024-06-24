from django.db import models
from django.contrib.auth.models import User

class Product(models.Model):
    types = {
        ("Computers", "Computers & Accessories"),
        ("Smartphones", "Smartphones"),
        ("Headphones", "Headphones"),
        ("Games", "Video Games"),
        ("TV", "TV"),
        ("Speakers", "Speakers"),
        ("Smartwatches", "Smartwatches"),
        ("Camera", "Camera & Photo")
    }

    type = models.CharField(max_length=30, choices=types)
    title = models.CharField(max_length=50)
    price = models.IntegerField()
    description = models.TextField()

class CartItem(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.OneToOneField(Product, on_delete=models.CASCADE)
    count = models.IntegerField()

class Wishlist(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.OneToOneField(Product, on_delete=models.CASCADE)

