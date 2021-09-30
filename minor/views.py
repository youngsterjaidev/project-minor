from django.shortcuts import render
from django.http import HttpResponse
import pymongo

connect_string = "mongodb+srv://minor11:minor11@cluster0.3pkmo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

from django.conf import settings
my_client = pymongo.MongoClient(connect_string)

# First define the database name
dbname = my_client['test']

collection_name = dbname["coll"]

medicine_1 = {
    "medicine_id": "RR000123456",
    "common_name" : "Paracetamol",
    "scientific_name" : "",
    "available" : "Y",
    "category": "fever"
}

# Insert the documents
collection_name.insert_one(medicine_1)

count = collection_name.count()

print(count)

# Create your views here.

def index(request):
  return render(request, "index.html")
  