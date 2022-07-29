from django.db import models
from users.models import Citizen

class Suggestion(models.Model):
  user = models.ForeignKey(Citizen,on_delete=models.SET_NULL,null=True)
  title = models.TextField(null=True)
  description = models.TextField(null=True)
  
  def __str__(self):
    return self.title[:50]