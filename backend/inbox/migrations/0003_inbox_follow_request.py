# Generated by Django 4.2.6 on 2023-11-16 00:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('followers', '__first__'),
        ('inbox', '0002_inbox_like_inbox_posts'),
    ]

    operations = [
        migrations.AddField(
            model_name='inbox',
            name='follow_request',
            field=models.ManyToManyField(blank=True, to='followers.friendrequest'),
        ),
    ]
