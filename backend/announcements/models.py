from django.db import models

class Announcements(models.Model):
  user = models.ForeignKey
  description = models.TextField(null=True)
  
  def __str__(self):
    return self.title[:50]