from django.db import models
from numpy import True_

from users.models import Citizen

class Announcements(models.Model):
  user = models.ForeignKey(Citizen,on_delete=models.CASCADE,null=True)
  date = models.DateField(auto_now_add=True,null=True)
  description = models.TextField(null=True)
  
  def __str__(self):
    return self.title[:50]