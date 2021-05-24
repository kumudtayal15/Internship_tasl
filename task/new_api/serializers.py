from rest_framework import serializers

from .models import Post,Report

class PostSerializer(serializers.HyperlinkedModelSerializer):
	class Meta:
		model = Post;
		fields = '__all__'

class ReportSerializer(serializers.HyperlinkedModelSerializer):
	class Meta:
		model = Report;
		fields = "__all__";
