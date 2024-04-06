from django.shortcuts import render
from .models import *
from rest_framework import status
from rest_framework.decorators import api_view
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
        role = 'user'
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
        payload = UserSerializer(new_user).data
        existing_user = user.objects.get(display_name=display_name)
        if(data['profession']!=""):
            verification = data["verification_img"]
            new_expert_request = expert_request(username=existing_user,verification_img = verification)
            new_expert_request.save()
        if data["country"] == "":
            pass
        else:
            country = data["country"]
            state = data["state"]
            district = data["district"]
            new_location = location(
                username=existing_user, country=country, state=state, district=district
            )
            new_location.save()
        return Response({"success": True,"payload":payload},status=status.HTTP_200_OK)


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

class getexpertreq(APIView):
    def get(self,request):
        try:
            reqs = expert_request.objects.filter(status="pending")
            serialized_obj = ExpertRequestSerializer(reqs,many=True)
            payload = serialized_obj.data
        except:
            payload = ""
        return Response({"payload":payload},status=status.HTTP_200_OK)

@api_view(['POST'])
def respondtoExpertRequest(request,pk):
    data = request.data
    response = data['response']
    try:
        req = expert_request.objects.get(pk=pk)
        existing_user = user.objects.get(display_name=req.username)
        req.status=response
        req.save()
        if(response=='accept'):
            existing_user.role='expert'
            existing_user.save()
        return Response({"sucess":True},status=status.HTTP_200_OK)
    except:
        return Response({'err':'give request does not exist'},status=status.HTTP_404_NOT_FOUND)
