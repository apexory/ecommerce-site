from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect 
from django.contrib.auth import login, authenticate, logout
from django.contrib.auth.models import User

from .models import Product, CartItem, Wishlist
from .forms import LoginForm, RegisterForm

def index(request):
    search = request.GET.get("search", None)
    category = request.GET.get("category", "All Products")
    cart = CartItem.objects.filter(user=request.user)
    wishlist = Wishlist.objects.filter(user=request.user)
    products = Product.objects.filter(type=category) if category != 'All Products' else Product.objects.all()

    if search:
        category = request.GET.get("category", f"Search - {search}")
        products = Product.objects.filter(title__icontains=search)

    cartIds = [item.product.id for item in cart]
    wishlistIds = [item.product.id for item in wishlist]

    return render(request, 'index.html', { 'products': products, 'category': category, 'cartIds': cartIds, 'wishlistIds': wishlistIds })

def contact(request):
    return render(request, 'contact.html')

def cart(request):
    cart = CartItem.objects.filter(user=request.user)
    total = sum([item.count * item.product.price for item in cart])
    return render(request, 'cart.html', { 'cart': cart, 'total': total })

def wishlist(request):
    cart = CartItem.objects.filter(user=request.user)
    wishlist = Wishlist.objects.filter(user=request.user)

    cartIds = [item.product.id for item in cart]
    wishlistIds = [item.product.id for item in wishlist]

    return render(request, 'wishlist.html', { 'wishlist': wishlist, 'cartIds': cartIds, 'wishlistIds': wishlistIds })

def product(request):
    redirect = request.GET.get("redirect", '')
    id = request.GET.get("id", None)
    if id == None: return HttpResponseRedirect(f'/{redirect}')

    cart = CartItem.objects.filter(user=request.user)
    wishlist = Wishlist.objects.filter(user=request.user)

    cartIds = [item.product.id for item in cart]
    wishlistIds = [item.product.id for item in wishlist]

    product = Product.objects.get(id=id)
    return render(request, 'product.html', { 'product': product, 'cartIds': cartIds, 'wishlistIds': wishlistIds })


def likeToWishlist(request):
    redirect = request.GET.get("redirect", '')
    id = request.GET.get("id", None)
    if id == None: return HttpResponseRedirect(f'/{redirect}')

    try:
        product = Product.objects.get(id=id)
    except Product.DoesNotExist:
        return HttpResponseRedirect(f'/{redirect}')
    
    try:
        item = Wishlist.objects.get(user=request.user, product=product).delete()
        return HttpResponseRedirect(f'/{redirect}')
    except Wishlist.DoesNotExist:
        cart = Wishlist.objects.create(user=request.user, product=product)
        return HttpResponseRedirect(f'/{redirect}')
    


def addToCart(request):
    redirect = request.GET.get("redirect", '')
    id = request.GET.get("id", None)
    if id == None: return HttpResponseRedirect(f'/{redirect}')

    try:
        product = Product.objects.get(id=id)
    except Product.DoesNotExist:
        return HttpResponseRedirect(f'/{redirect}')

    try:
        cart = CartItem.objects.get(user=request.user, product=product)
        cart.count += 1
        cart.save(update_fields=["count"])
        return HttpResponseRedirect(f'/{redirect}')
    except CartItem.DoesNotExist:
        cart = CartItem.objects.create(user=request.user, product=product, count=1)
        return HttpResponseRedirect(f'/{redirect}')

def removeToCart(request):
    redirect = request.GET.get("redirect", '')
    id = request.GET.get("id", None)
    if id == None: return HttpResponseRedirect(f'/{redirect}')
    all = bool(request.GET.get("all", False))

    try:
        product = Product.objects.get(id=id)

        if all == True:
            cart = CartItem.objects.filter(product__id=id).delete()
            return HttpResponseRedirect(f'/{redirect}')
        
        cart = CartItem.objects.get(user=request.user, product__id=id)

        if cart.count == 1:
            cart = CartItem.objects.filter(product__id=id).delete()
            return HttpResponseRedirect(f'/{redirect}')

        cart.count -= 1
        cart.save(update_fields=["count"])
        return HttpResponseRedirect(f'/{redirect}')
    except Product.DoesNotExist:
        return HttpResponseRedirect(f'/{redirect}')

def view_login(request):
    if request.method == "POST":
        loginform = LoginForm(request.POST)
        if loginform.is_valid():
            username = loginform.cleaned_data["username"]
            password = loginform.cleaned_data["password"]

            try:
                check = User.objects.get(username=username)
            except User.DoesNotExist:
                loginform = LoginForm()
                return render(request, 'login.html', { 'form': loginform, 'error': 'User is not found.' })
            
            user = authenticate(username=username, password=password)
            if user is None: 
                loginform = LoginForm()
                return render(request, 'login.html', { 'form': loginform, 'error': 'Invalid password.' })
            login(request, user)
            return HttpResponseRedirect('/')
        else: 
            loginform = LoginForm()
            return render(request, 'login.html', { 'form': loginform, 'error': 'Invalid data.' })
    else:
        loginform = LoginForm()
        return render(request, 'login.html', { 'form': loginform })

def register(request):
    if request.method == 'POST':
        registerform = RegisterForm(request.POST)
        if registerform.is_valid():
            username = registerform.cleaned_data['username']
            email = registerform.cleaned_data['email']
            password = registerform.cleaned_data['password']
            confirmPass = registerform.cleaned_data['confirmPass']

            if password != confirmPass:
                loginform = LoginForm()
                return render(request, 'login.html', { 'form': loginform, 'error': 'Password and Confirm Password are not same.' })

            try:
                check = User.objects.get(username=username)
                loginform = LoginForm()
                return render(request, 'login.html', { 'form': loginform, 'error': 'User is not found.' })
            except User.DoesNotExist:
                user = User.objects.create_user(username, email, password)
                login(request, user)
                return HttpResponseRedirect('/')
        else:
            registerform = RegisterForm()
            return render(request, 'register.html', { 'form': registerform, 'error': 'Invalid data.' })
    else:
        registerform = RegisterForm()
        return render(request, 'register.html', { 'form': registerform })

def view_logout(request):
    logout(request)
    return HttpResponseRedirect('/')