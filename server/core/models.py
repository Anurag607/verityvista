from django.db import models

ROLES = [('user','normal user'),('expert','domain expert')]

# Create your models here.
class user(models.Model):
    email = models.CharField(max_length=50,required=True)
    display_name = models.CharField(max_length=100, unique=True, required=True)
    role = models.CharField(choices=ROLES, max_length=50,required=True)
    profession = models.CharField(max_length=50,null=True,default=None)
    def __str__(self):
        return str(self.display_name)

class location(models.Model):
    username = models.ForeignKey(user,max_length=50)
    country = models.CharField(max_length=100,required=True)
    state = models.CharField(max_length=100,required=True)
    district = models.CharField(max_length=100,required=True)
    