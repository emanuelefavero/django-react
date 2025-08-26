from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from todo.models import Todo

from todo.serializers import TodoSerializer


class TodoViewSet(viewsets.ModelViewSet):
    queryset = Todo.objects.all().order_by("-created")
    serializer_class = TodoSerializer
    permission_classes = [AllowAny]
