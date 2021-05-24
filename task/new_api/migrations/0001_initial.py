# Generated by Django 3.2.2 on 2021-05-21 18:52

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Post',
            fields=[
                ('p_id', models.AutoField(auto_created=True, primary_key=True, serialize=False)),
                ('caption', models.CharField(max_length=128)),
                ('comments_count', models.IntegerField(default=0)),
                ('like_count', models.IntegerField(default=0)),
                ('engagement', models.IntegerField(default=0)),
                ('impressions', models.IntegerField(default=0)),
                ('reach', models.IntegerField(default=0)),
                ('username', models.CharField(max_length=64)),
                ('image', models.ImageField(null=True, upload_to='images/')),
                ('timestamp', models.DateTimeField(auto_now=True)),
            ],
        ),
    ]