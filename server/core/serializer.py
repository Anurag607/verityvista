from rest_framework import serializers
from rest_framework.response import Response
from .models import *

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = user
        fields = '__all__'