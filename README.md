# library_management

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Python 3.8 or higher
- Django 3.2 or higher
- Django REST Framework 3.12 or higher
- pip (Python package installer)
  
## Django project setup
1. Clone the repository:
```sh
   git clone https://github.com/nileshkharat-git/library_management.git
   cd server
```
2.Create a virtual environment (optional but recommended):
```sh
    python3 -m venv venv
```
3.Activate the virtual environment:
a)On Windows:
```sh
  .\Scripts\activate
```

b)On macOS/Linux:
```sh
  source venv/bin/activate
```
4.Install the required dependencies:
```sh
  pip install -r requirements.txt
```
5.Apply the migrations:
```sh
  cd library_management
  python manage.py migrate
```
6.Run the development server:
```sh
  python manage.py runserver
```
API will be available at http://127.0.0.1:8000/ .

## Endpoints
| Endpoint                 | Method | Description                                  |
|--------------------------|--------|----------------------------------------------|
| `/books/`                | GET    | List all books.                              |
| `/books/{id}`            | GET    | Get details of a specific book by ID.        |                  |
| `/books/{id}/`           | POST   | Create a book record.                        |
| `/books/{id}/`           | PATCH  | Update a specific book by ID.                |
| `/books/{id}/`           | DELETE | Delete a specific book by ID.                |
| `/users/register_admin/` | POST   | Create a new Admin user.                     |
| `/token/`                | POST   | GET access token for authentication.         |
| `/token/refresh/`        | POST   | GET refresh token after access token expired.|
