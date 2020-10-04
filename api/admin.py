from django.contrib import admin
from .models import Subject, VideoLink, ProblemPDF
# Register your models here.

admin.site.register(Subject)
admin.site.register(VideoLink)
admin.site.register(ProblemPDF)
