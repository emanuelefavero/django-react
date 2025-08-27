# Django React

This repository shows how to set up a Django backend with a React frontend. It includes a simple Todo application with a REST API.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/django-react.git
   cd django-react
   ```

2. Set up a virtual environment:

   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. Install the required packages:

   ```bash
   pip install -r requirements.txt
   ```

4. Run the Django development server:

   ```bash
   python manage.py runserver
   ```

5. Open a new terminal and navigate to the `frontend` directory:

   ```bash
   cd frontend
   ```

6. Install the frontend dependencies:

   ```bash
   npm install
   ```

7. Start the React development server:

   ```bash
   npm run dev
   ```

Now you should have both the Django backend and the React frontend running. You can access the API at `http://localhost:8000/api/todo/` and the React app at `http://localhost:3000/`.

## API Endpoints

- GET /api/todo/ - Retrieve a list of todos

## Resources

- [Django Documentation](https://www.djangoproject.com/)
- [Django REST Framework](https://www.django-rest-framework.org/)
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
