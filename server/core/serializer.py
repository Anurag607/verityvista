from rest_framework import serializers
from rest_framework.response import Response
from .models import *

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = user
        fields = '__all__'

class ExpertRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = expert_request
        fields = '__all__'