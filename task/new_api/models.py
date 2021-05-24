from django.db import models

# Create your models here.

class Post(models.Model):
	caption = models.CharField(max_length = 128 );
	comments_count = models.IntegerField(default = 0);
	like_count = models.IntegerField(default = 0);
	engagement = models.IntegerField(default = 0);
	impressions = models.IntegerField(default = 0);
	reach = models.IntegerField(default = 0);
	username = models.CharField(max_length = 64);
	image = models.ImageField(upload_to = "images/",null = True);
	timestamp = models.DateTimeField(auto_now = True);
	p_id = models.AutoField(primary_key = True,auto_created= True);

class Report(models.Model):
	name = models.CharField(max_length = 64);
	hashtag = models.CharField(max_length = 64);
	impact = models.IntegerField(default = 0);
	r_id = models.AutoField(primary_key = True,auto_created=True);
	
