from django.db import models
from django.urls import reverse
# from django.conf import settings
# USER_MODEL = settings.AUTH_USER_MODEL


class LocationVO(models.Model):
    import_href = models.CharField(max_length=300, unique=True)
    name = models.CharField(max_length=200)

    def __str__(self):
        return f"{self.name}"


class Hat(models.Model):
    fabric = models.CharField(max_length=300)
    stylename = models.CharField(max_length=300)
    color = models.CharField(max_length=300)
    picurl = models.URLField(null=True)
    location = models.ForeignKey(LocationVO, related_name="hats", on_delete=models.CASCADE)


    def get_api_url(self):
        return reverse("api_show_hat", kwargs={"pk": self.pk})


    def __str__(self):
        return f"{self.fabric} {self.stylename}"