from .models import Suggestion
from django.core import serializers
from django.http import HttpResponse

def all(request):
  suggestions = Suggestion.objects.filter()
  suggestions = serializers.serialize('json', suggestions)
  return HttpResponse(suggestions, content_type="text/json-comment-filtered")

def create(request):
  if request.method == "POST":
    suggestion = Suggestion()
    suggestion.user = request.user.citizen
    suggestion.title = request.POST["title"]
    suggestion.description = request.POST["description"]
    suggestion.save()
    suggestion = Suggestion.objects.filter(id=suggestion.id)
    suggestion = serializers.serialize('json', suggestion)
    return HttpResponse(suggestion, content_type="text/json-comment-filtered")