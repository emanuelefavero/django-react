# Django React

This repository shows how to set up a Django backend with a React frontend. It includes a simple Todo application with a REST API.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/emanuelefavero/django-react.git
   cd django-react
   ```

2. Set up a virtual environment:

   ```bash
   make virtualenv
   ```

   > Tip: @see `Makefile` for all available commands

3. Install the required packages:

   ```bash
   make install
   ```

4. Run the Django development server:

   ```bash
   make runserver
   ```

5. Start the React development server:

   ```bash
   make runclient
   ```

Now you should have both the Django backend and the React frontend running. You can access the API at `http://localhost:8000/api/todo/` and the React app at `http://localhost:3000/`.

## API Endpoints

- GET /api/todo/ - Retrieve a list of todos

> Note: More API endpoints will be added in future updates

## Migrations

Make sure to run `python manage.py makemigrations` and `python manage.py migrate` to apply database migrations after making changes to the models.

## Resources

- [Django Documentation](https://www.djangoproject.com/)
- [Django REST Framework](https://www.django-rest-framework.org/)
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://reactjs.org/docs/getting-started.html)

## License

- [MIT](LICENSE.md)

&nbsp;

&nbsp;

[**Go To Top &nbsp; ⬆️**](#django-react)
