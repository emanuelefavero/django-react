from django.core.management.utils import get_random_secret_key

# 1. Run `utils/generate_secret_key.py` to generate a new secret key
# 2. Copy the generated key and replace the SECRET_KEY value in your .env file

if __name__ == "__main__":
    key = get_random_secret_key().replace(
        "#", "A"
    )  # ? Replace # with A to avoid creating comments in .env files
    print(key)
