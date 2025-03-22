from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager

class UserManager(BaseUserManager):
    def create_user(self, email,password=None):
        if not email:
            raise ValueError("Email is required")
        email = self.normalize_email(email)
        user = self.model(email=email)
        user.set_password(password)
        user.is_staff = True
        user.save()
        return user

    def create_superuser(self, email,password=None):
        user = self.model(email=email)
        user.set_password(password)
        user.is_superuser = True
        user.is_admin = True
        user.is_staff = True
        user.save()
        return user
        

class User(AbstractBaseUser):
    id = models.AutoField(primary_key=True)
    email = models.EmailField(unique=True)    
    is_active = models.BooleanField(default=True)
    is_superuser = models.BooleanField(default=False)
    is_admin = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    objects = UserManager()

    def __str__(self):
        return self.email
    
    def has_perm(self, perm, obj=None):
        return True
    
    def has_module_perms(self, app_label):
        return True
