from .models import Complaint
from django.core import serializers
from django.http import HttpResponse

def all(request):
  complaints = Complaint.objects.filter()
  complaints = serializers.serialize('json', complaints)
  return HttpResponse(complaints, content_type="text/json-comment-filtered")

def create_complaint(request):
  if request.method == "POST":
    complaint = Complaint()
    complaint.user = request.user.citizen
    complaint.title = request.POST["title"]
    complaint.description = request.POST["description"]
    complaint.save()
    complaint = Complaint.objects.filter(id=complaint.id)
    complaint = serializers.serialize('json', complaint)
    return HttpResponse(complaint, content_type="text/json-comment-filtered")