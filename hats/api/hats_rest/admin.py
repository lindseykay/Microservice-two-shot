from django.contrib import admin
from django.db import models
from .models import Hat, LocationVO


# Register your models here.
@admin.register(Hat)
class HatAdmin(admin.ModelAdmin):
    pass


@admin.register(LocationVO)
class LocationVOAdmin(admin.ModelAdmin):
    pass


# admin.site.register(Hat)
# admin.site.register(LocationVO)

# from .models import Location
# # Register your models here.


# @admin.register(Location)
# class LocationAdmin(admin.ModelAdmin):
#     pass
