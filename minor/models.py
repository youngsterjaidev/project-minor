from django.db import models


class signup(models.Model):
    user_id = models.AutoField(primary_key=True)
    email_id = models.CharField(max_length=50, default="")
    

def __str__(self):
    return self.email_id
