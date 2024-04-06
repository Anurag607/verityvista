from rest_framework import serializers
from .models import FactReqModel, FactResModel

class FactReqModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = FactReqModel
        fields = '__all__'

class FactResModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = FactResModel
        fields = '__all__'
