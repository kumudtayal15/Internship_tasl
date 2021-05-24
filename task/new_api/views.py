from django.shortcuts import render

# Create your views here.

from rest_framework import viewsets,status
from rest_framework.response import Response
from .serializers import PostSerializer,ReportSerializer
from .models import Post,Report
from django.shortcuts import get_object_or_404

class PostViewSet(viewsets.ModelViewSet):
	queryset = Post.objects.all().order_by('p_id');
	serializer_class = PostSerializer

	def list(self,request):
		queryset = Post.objects.all().order_by('p_id');
		serializer = PostSerializer(queryset,many = True ,context = {'request' : request});
		return Response(serializer.data);

	def retrieve(self, request, pk=None):
		print(pk);
		queryset = Post.objects.all()
		user = get_object_or_404(queryset, pk=pk)
		serializer = PostSerializer(user,context = {'request' : request})
		return Response(serializer.data)

	def create(self,request):
		serializer = self.get_serializer(data=request.data)
		serializer.is_valid(raise_exception=True)
		self.perform_create(serializer)
		headers = self.get_success_headers(serializer.data)
		return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

class ReportViewSet(viewsets.ModelViewSet):
	queryset = Report.objects.all();
	serializer_class = ReportSerializer;

	def list(self,request):
		queryset = Report.objects.all();
		serializer = ReportSerializer(queryset,many = True ,context = {'request' : request});
		return Response(serializer.data);


	def create(self,request):
		serializer = self.get_serializer(data=request.data)
		serializer.is_valid(raise_exception=True)
		self.perform_create(serializer)
		headers = self.get_success_headers(serializer.data)
		return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

