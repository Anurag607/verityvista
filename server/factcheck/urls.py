from django.urls import path
from .views import (
    FactReqModelListCreateAPIView,
    FactReqModelRetrieveAPIView,
    FactResModelListCreateAPIView,
    FactResModelRetrieveAPIView
)

from .views import upvote, downvote, add_response

urlpatterns = [
    path('factmodels/', FactReqModelListCreateAPIView.as_view(), name='factmodel-list'),
    path('factmodels/<int:pk>/', FactReqModelRetrieveAPIView.as_view(), name='factmodel-detail'),
    path('factres/', FactResModelListCreateAPIView.as_view(), name='factres-list'),
    path('factres/<int:pk>/', FactResModelRetrieveAPIView.as_view(), name='factres-detail'),
    path('factmodels/<int:pk>/upvote/', upvote, name='factreq-upvote'),
    path('factmodels/<int:pk>/downvote/', downvote, name='factreq-downvote'),
    path('factres/<int:pk>/add_response', add_response, name='factreq-add-response'),
]
