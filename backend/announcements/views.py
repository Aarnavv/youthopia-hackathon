from django.http import HttpResponse
from .models import Announcements
import json 
from django.core import serializers

def all(request):
  announcements = Announcements.objects.filter()
  announcements = serializers.serialize('json', announcements)
  return HttpResponse(announcements, content_type="text/json-comment-filtered")

def create_announcement(request):
  if request.method == "POST":
    obj = json.loads(request.POST["user"])
    if obj["is_superuser"]:
      title = request.POST["title"]
      description = request.POST["description"]
      announcement = Announcements()
      announcement.title = title
      announcement.description = description
      announcement.save()
      announcement = serializers.serialize('json', [announcement])
      return HttpResponse(announcement, content_type="text/json-comment-filtered")
          
        