# Run the Django development server
runserver:
	python manage.py runserver

# Start the frontend development server
runclient:
	cd frontend && npm run dev

# Run both Django and React servers
run:
	$(MAKE) -j 2 runserver runclient

# Create a virtual environment
virtualenv:
	python -m venv venv
	source venv/bin/activate

# Install dependencies
install:
	pip install -r requirements.txt
	cd frontend && npm install

# Generate requirements.txt
gen_requirements:
	pip freeze > requirements.txt

# Run database migrations
migrate:
	python manage.py makemigrations
	python manage.py migrate
