from django.db import models

ROLES = [('user','normal user'),('expert','domain expert'),('admin','moderator')]

# Create your models here.
class user(models.Model):
    email = models.CharField(max_length=50,unique=True)
    display_name = models.CharField(max_length=100, unique=True)
    role = models.CharField(choices=ROLES, max_length=50)
    profession = models.CharField(max_length=50,null=True,default=None)
    def __str__(self):
        return str(self.display_name)

class location(models.Model):
    username = models.ForeignKey(user,to_field='display_name',max_length=50,on_delete=models.CASCADE)
    country = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    district = models.CharField(max_length=100)
    
class expert_request(models.Model):
    username = models.ForeignKey(user,to_field='display_name',max_length=50,on_delete=models.CASCADE)
    verification_img = models.CharField(max_length=100)
    status = models.CharField(max_length=50,default='pending')