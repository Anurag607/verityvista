from django.shortcuts import render
from .models import *
from rest_framework.response import Response
from rest_framework.views import APIView
import uuid
from .serializer import *
# Create your views here.
# API


class Registration(APIView):
    def post(self, request):
        data = request.data
        mail = data["email"]
        role = data["role"]
        display_name = data["dname"]
        if data["profession"] == "":
            profession = None
        else:
            profession = data["profession"]
        hash = uuid.uuid4().hex
        display_name = display_name + hash
        new_user = user(
            email=mail, display_name=display_name, role=role, profession=profession
        )
        new_user.save()
        if data["country"] == "":
            pass
        else:
            country = data["country"]
            state = data["state"]
            district = data["district"]
            existing_user = user.objects.get(display_name=display_name)
            new_location = location(
                username=existing_user, country=country, state=state, district=district
            )
            new_location.save()
        return Response({"status": 200})


class checkreg(APIView):
    def post(self, request):
        data = request.data
        mail = data["email"]
        try:
            existing = user.objects.get(email=mail)
            serialized_obj = UserSerializer(existing)
            return Response({"status": 304, "error": "already exists","payload":serialized_obj.data})
        except:
            return Response({"status": 200})
