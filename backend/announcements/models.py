from django.db import models

class Announcements(models.Model):
  title = models.TextField(null=True)
  description = models.TextField(null=True)
  
  def __str__(self):
    return self.title[:50]