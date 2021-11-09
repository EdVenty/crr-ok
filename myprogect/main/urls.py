from django.conf.urls import urllib
from . import views

app_name='main'
urlpatterns=[url(r'^$',views.index,name='index')]