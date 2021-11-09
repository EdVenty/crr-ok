# https://jqueryui.com/demos/

from django.urls import path
from . import views

from django.conf.urls import include, url
from django.contrib import admin
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index),
]