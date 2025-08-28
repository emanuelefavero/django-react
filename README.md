# Django React

This repository shows how to set up a Django backend with a React frontend. It includes a simple Todo application with a REST API.

## Getting Started

To get started with this project, follow these steps:

- Clone the repository:

  ```bash
  git clone https://github.com/emanuelefavero/django-react.git
  cd django-react
  ```

- Set up a virtual environment:

  ```bash
  make virtualenv
  ```

  > Tip: @see `Makefile` for all available commands

- Install the required packages:

  ```bash
  make install
  ```

- Add Django `.env` variables in the root `.env` file:

  ```bash
  SECRET_KEY= # Run `utils/generate_secret_key.py` to generate a new key
  DEBUG= # Set to False in production, True for development
  ```

- Add React `.env` variables in the `frontend/.env` file:

  ```bash
  NEXT_PUBLIC_SERVER_URL=http://localhost:8000 # Set to your Django server URL
  NEXT_PUBLIC_CLIENT_URL=http://localhost:3000 # Set to your React client URL
  ```

- Run the Django development server:

  ```bash
  make runserver
  ```

- Start the React development server:

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
