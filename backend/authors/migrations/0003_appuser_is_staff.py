# Generated by Django 4.2.6 on 2023-10-30 23:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authors', '0002_alter_appuser_groups_alter_appuser_user_permissions'),
    ]

    operations = [
        migrations.AddField(
            model_name='appuser',
            name='is_staff',
            field=models.BooleanField(default=False),
        ),
    ]
