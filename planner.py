from openai import OpenAI

from dotenv import load_dotenv

import os

load_dotenv()

client = OpenAI(
    api_key=os.getenv("GROQ_API_KEY"),
    base_url="https://api.groq.com/openai/v1"
)

def planner_agent(user_input):

    try:

        response = client.chat.completions.create(

            model="llama-3.3-70b-versatile",

            messages=[
                {
                    "role": "system",
                    "content": """
                    You are an AI Planner Agent.

                    Break the user request into logical execution steps.
                    """
                },
                {
                    "role": "user",
                    "content": user_input
                }
            ]

        )

        return response.choices[0].message.content

    except Exception as e:

        return f"Planner Agent Error: {str(e)}"