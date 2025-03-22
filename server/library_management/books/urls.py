from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import BookViewSet
from rest_framework.generics import ListAPIView
from .serializers import BookSerializer, Book

router = DefaultRouter()
router.register(r'', BookViewSet, basename='books')

urlpatterns = [
    path('book_list/', ListAPIView.as_view(queryset=Book.objects.all(), serializer_class=BookSerializer))
]+router.urls