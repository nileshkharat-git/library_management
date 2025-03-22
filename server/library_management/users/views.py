from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import User

@api_view(['POST'])
def register(request):
    email = request.data.get('email')
    password = request.data.get('password')

    if not email or not password:
        return Response({'error': 'Email and password are required.'}, status=400)

    try:
        user = User.objects.create_user(email=email, password=password)
        return Response({'message': 'User registered successfully.'}, status=201)
    except Exception as e:
        return Response({'error': str(e)}, status=400)

@api_view(['POST'])
def register_admin(request):
    email = request.data.get('email')
    password = request.data.get('password')

    if not email or not password:
        return Response({'error': 'Email and password are required.'}, status=400)

    try:
        user = User.objects.create_superuser(email=email, password=password)
        return Response({'message': 'Admin registered successfully.'}, status=201)
    except Exception as e:
        return Response({'error': str(e)}, status=400)