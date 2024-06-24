from django.contrib import admin
from django.contrib.auth.views import LogoutView
from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.index),
    path('contact', views.contact),
    path('cart', views.cart),
    path('wishlist', views.wishlist),
    path('product', views.product),

    path('likeToWishlist', views.likeToWishlist),

    path('addToCart', views.addToCart),
    path('removeToCart', views.removeToCart),

    path('logout', views.view_logout, name="logout"),
    path('login', views.view_login, name="login"),
    path('register', views.register)
]
