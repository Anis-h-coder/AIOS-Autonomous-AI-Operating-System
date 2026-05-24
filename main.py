from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from graph.workflow import run_workflow

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {
        "message": "AIOS Backend Running"
    }

@app.post("/chat")
async def chat(data: dict):

    user_input = data.get("message")

    result = await run_workflow(user_input)

    return {
        "response": result
    }