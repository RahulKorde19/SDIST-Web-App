from django.contrib import admin
from django.urls import path, include
from . import views
from rest_framework import routers

# TODO: update these routes as per project requirements
urlpatterns = [
    path("", views.UserView.as_view(), name=""),
	path('register', views.UserRegister.as_view(), name='register'),
	path('login', views.UserLogin.as_view(), name='login'),
	path('logout', views.UserLogout.as_view(), name='logout'),
	path('user', views.UserView.as_view(), name='user'),
	path('<str:pk>/update/', views.UserUpdate.as_view(), name='user-update'),
	path('<int:pk>', views.UserDetails.as_view(), name='user-detail'),
	path('<int:pk>/followers', views.FollowerList.as_view(), name='followers'),
	path('<int:pk>/followers/<int:follower_id>', views.FollowerDetail.as_view(), name='follower-detail'),
    path('<int:pk>/followRequests', views.FollowRequestList.as_view(), name='followrequests'),
    path('<int:pk>/follow/<int:object_author>', views.FollowRequestDetail.as_view(), name='follow'),
]