from rest_framework import serializers
from .models import FactReqModel, FactResModel, VoteRes

class FactReqModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = FactReqModel
        fields = '__all__'

class FactResModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = FactResModel
        fields = '__all__'


class VoteResModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = VoteRes
        fields = '__all__'