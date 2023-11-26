# from .models import Comment
# from rest_framework import serializers
# from authors.serializers import UserSerializer
# from authors.models import AppUser

# class CommentSerializer(serializers.ModelSerializer):

#     author = UserSerializer(read_only = False)
#     contentType = serializers.CharField(source="get_type")
#     id = serializers.URLField(source="get_id",read_only=True)
#     type = serializers.CharField(default="comment",read_only=True)

#     class Meta:
#         model = Comment
#         fields = ("id","type","comment","contentType","url","author","published")

#     def create(self, validated_data):
#         #For in-case of a new author
#         author_dict = validated_data.pop("author",None)

#         if author_dict:
#             author = AppUser.objects.get(id=author_dict["id"])
#             validated_data['author'] = author

#         comment = Comment.objects.create(**validated_data)

#         return comment