from django import forms

class LoginForm(forms.Form):
    username = forms.CharField(help_text="myusername")
    password = forms.CharField(help_text="password???")

class RegisterForm(forms.Form):
    username = forms.CharField(help_text="myusername")
    email = forms.CharField(help_text="user@user.user")
    password = forms.CharField(help_text="password")
    confirmPass = forms.CharField(help_text="password")