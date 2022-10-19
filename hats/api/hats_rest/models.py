from django.db import models
# from django.conf import settings
# USER_MODEL = settings.AUTH_USER_MODEL


class LocationVO(models.Model):
    import_href = models.CharField(max_length=300, unique=True)
    name = models.CharField(max_length=200)


class Hat(models.Model):
    fabric = models.CharField(max_length=300)
    stylename = models.CharField(max_length=300)
    color = models.CharField(max_length=300)
    picurl = models.URLField(null=True)
    location = models.ForeignKey(LocationVO, related_name="hats", on_delete=models.CASCADE)

