from django.db import models
from django.contrib.auth.models import User

# Create your models here.

#ID's are automatically generated.

class Admin(models.Model):
    username = models.CharField(max_length = 20)
    pw = models.CharField(max_length = 40)

class Artifact(models.Model):
    name = models.CharField(max_length = 255)
    siteno = models.CharField(max_length = 10)
    state = models.CharField(max_length = 255)
    county = models.CharField(max_length = 255)
    description = models.CharField(max_length = 1000)
    admin = models.ForeignKey(Admin)