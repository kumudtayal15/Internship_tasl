from . import views
from django.contrib import admin
from django.urls import path,include
from django.conf import settings
from django.conf.urls.static import static

from rest_framework import routers

router = routers.DefaultRouter();
router.register(r'Post',views.PostViewSet);

router1 = routers.DefaultRouter();
router1.register(r"Report",views.ReportViewSet);

urlpatterns = [
	path('',include(router.urls)),
	path('',include(router1.urls)),
	path('api-auth/', include('rest_framework.urls',namespace = 'rest_framework'))
]

if settings.DEBUG:
        urlpatterns += static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)