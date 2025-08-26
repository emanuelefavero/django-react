from rest_framework import serializers

from todo.models import Todo


class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = ["id", "title", "completed", "created", "updated"]
        read_only_fields = ["id", "created", "updated"]
