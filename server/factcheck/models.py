from django.db import models
from core.models import user
class FactReqModel(models.Model):
    category = models.CharField(max_length=50)
    heading = models.CharField(max_length=150)
    content = models.CharField(max_length = 500)
    imageLink = models.CharField(max_length= 500, blank = True)
    refLink = models.CharField(max_length = 500)
    upvote = models.IntegerField(default = 0)
    downvote = models.IntegerField(default = 0)
    dateCreated = models.DateTimeField(auto_now_add = True)
    
    def up(self):
        self.upvote = 1 + self.upvote
        self.save()

    def down(self):
        self.downvote += 1
        self.save()
    
class FactResModel(models.Model):
    foreignId = models.ForeignKey(FactReqModel, on_delete=models.CASCADE)
    countPosRes = models.IntegerField(default = 0)
    countNegRes = models.IntegerField(default = 0)
    noSentimentRes = models.IntegerField(default = 0)
    message = models.CharField(max_length=200, blank=True, null=True)
    closed = models.BooleanField(default = False)
    
class VoteRes(models.Model):
    userID = models.ForeignKey(user, to_field="display_name", on_delete=models.CASCADE)
    postreqID = models.ForeignKey(FactReqModel, on_delete=models.CASCADE)
    
    
class VerdictRes(models.Model):
    userID = models.ForeignKey(user, to_field="display_name", on_delete=models.CASCADE)
    postresID = models.ForeignKey(FactReqModel, on_delete=models.CASCADE)
    