from django.urls import path
from . import views

# urlpatterns = [
#     path('', views.myIndex, name = 'index'),
# ]

urlpatterns = [
    # path('', views.HelloApiView.as_view(), name='index'),
    path('',views.myhello_api, name='index'),
]