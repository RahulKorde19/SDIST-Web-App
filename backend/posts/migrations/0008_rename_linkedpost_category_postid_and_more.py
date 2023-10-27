# Generated by Django 4.2.6 on 2023-10-27 22:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0007_rename_postid_category_linkedpost_and_more'),
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
