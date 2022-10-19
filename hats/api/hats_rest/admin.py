from django.contrib import admin
from django.db import models
from .models import Hat, LocationVO

# Register your models here.

admin.site.register(Hat)
admin.site.register(LocationVO)