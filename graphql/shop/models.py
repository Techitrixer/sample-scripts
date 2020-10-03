from django.db import models

class Store(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Product(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    store = models.ForeignKey(
        Store, related_name='products', on_delete=models.CASCADE)

    def __str__(self):
        return self.name
