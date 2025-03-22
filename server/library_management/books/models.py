from django.db import models

class Book(models.Model):
    title = models.CharField(max_length=50)
    author = models.CharField(max_length=50)
    isbn = models.CharField(max_length=20, unique=True)
    genre = models.CharField(max_length=50)
    pages = models.IntegerField()
    language = models.CharField(max_length=20)
    description = models.TextField(null=True, blank=True)
    
    def __str__(self):
        return self.title