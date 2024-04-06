from django.shortcuts import render
from rest_framework import generics
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from .models import FactReqModel, FactResModel, VoteRes
from .serializers import FactReqModelSerializer, FactResModelSerializer, VoteResModelSerializer

class FactReqModelListCreateAPIView(generics.ListCreateAPIView):
    serializer_class = FactReqModelSerializer


    def get_queryset(self):
        return FactReqModel.objects.all()

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class FactReqModelRetrieveAPIView(generics.RetrieveAPIView):
    queryset = FactReqModel.objects.all()
    serializer_class = FactReqModelSerializer


class FactResModelListCreateAPIView(generics.ListCreateAPIView):
    serializer_class = FactResModelSerializer


    def get_queryset(self):
        return FactResModel.objects.all()

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class FactResModelRetrieveAPIView(generics.RetrieveAPIView):
    queryset = FactResModel.objects.all()
    serializer_class = FactResModelSerializer

@api_view(['POST'])
def upvote(request, pk):
    try:
        fact_req = FactReqModel.objects.get(pk=pk)
        try:
            check_vote = VoteRes.objects.get(userID=display_name, postreqID=postId)
            return Response({"message":"Already responded"}, status=status.HTTP_208_ALREADY_REPORTED)
        except:
            new_vote = VoteRes.objects.create(userID=display_name,postreqID=postId)
            new_vote.save()
            return Response({"message":"success"}, status=status.HTTP_202_ACCEPTED)
    except FactReqModel.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    fact_req.up()
    serializer = FactReqModelSerializer(fact_req)
    return Response(serializer.data)

@api_view(['POST'])
def downvote(request, pk):
    data = request.data
    display_name = data['dname']
    postId = data['id']
    
    try:
        fact_req = FactReqModel.objects.get(pk=pk)
        try:
            check_vote = VoteRes.objects.get(userID=display_name, postreqID=postId)
            return Response({"message":"Already responded"}, status=status.HTTP_208_ALREADY_REPORTED)
        except:
            new_vote = VoteRes.objects.create(userID=display_name,postreqID=postId)
            new_vote.save()
            return Response({"message":"success"}, status=status.HTTP_202_ACCEPTED)
    except FactReqModel.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    fact_req.down()
    serializer = FactReqModelSerializer(fact_req)
    
    return Response(serializer.data)

@api_view(['POST'])
def add_response(request, pk):
    response = request.data.get('response')
    if response not in [-1, 0, 1]:
        return Response({'error': 'Invalid response'}, status=status.HTTP_400_BAD_REQUEST)
    try:
        fact_req = FactReqModel.objects.get(pk=pk)
        try:
            fact_res = FactResModel.objects.get(foreignId=fact_req)
            if response == -1:
                fact_res.countNegRes += 1
            elif response == 1:
                fact_res.countPosRes += 1
            else:
                fact_res.noSentimentRes += 1
            fact_res.save()
        except:
            fact_res = FactResModel.objects.create(foreignId=fact_req, message=request.data.get('message'), closed=False)
            if response == -1:
                fact_res.countNegRes += 1
            elif response == 1:
                fact_res.countPosRes += 1
            else:
                fact_res.noSentimentRes += 1
            fact_res.save()
    except FactReqModel.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)


    serializer = FactResModelSerializer(fact_res)
    return Response(serializer.data, status=status.HTTP_201_CREATED)