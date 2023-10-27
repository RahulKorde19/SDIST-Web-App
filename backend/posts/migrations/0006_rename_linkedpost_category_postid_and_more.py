# Generated by Django 4.2.6 on 2023-10-24 03:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0005_post_likes'),
    ]

    operations = [
        migrations.RenameField(
            model_name='category',
            old_name='linkedPost',
            new_name='postId',
        ),
        migrations.AlterField(
            model_name='category',
            name='category',
            field=models.CharField(db_index=True, max_length=100),
        ),
    ]
