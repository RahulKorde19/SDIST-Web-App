from django.db import models

# Create your models here.


class Node(models.Model):


    host = models.URLField(max_length=200)

    username=models.CharField(max_length=100)
    password=models.CharField(max_length=100)

    def __str__(self):
        return "Host: " + self.host