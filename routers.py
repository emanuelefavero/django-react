from rest_framework import routers
from todo.viewsets import TodoViewSet

router = routers.SimpleRouter()

router.register(r"todo", TodoViewSet, basename="todo")
