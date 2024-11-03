from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from data import data, todosBody

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
)


@app.get("/todos")
def main():
    return {
        "data": data
    }


@app.get("/todos/{todosId}")
def specific_todo(todosId: int):
    return {
        "data": [todo for todo in todosBody if todo["id"] == todosId][0] | [todo for todo in data if todo["id"] == todosId][0] 
    }
