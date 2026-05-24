from typing import TypedDict

from langgraph.graph import (
    StateGraph,
    END
)

from agents.planner import planner_agent

from agents.browser_agent import (
    browser_agent
)

class AgentState(TypedDict):

    input: str

    output: str

# Planner Node

def planner_node(state):

    result = planner_agent(
        state["input"]
    )

    return {
        "output": result
    }

# Browser Node

async def browser_node(state):

    result = await browser_agent(
        state["input"]
    )

    return {
        "output": result
    }

# Router

def router(state):

    user_input = state["input"].lower()

    if (
        "search" in user_input
        or "google" in user_input
        or "browser" in user_input
    ):
        return "browser"

    return "planner"

# Build Graph

builder = StateGraph(AgentState)

builder.add_node(
    "planner",
    planner_node
)

builder.add_node(
    "browser",
    browser_node
)

builder.set_conditional_entry_point(
    router
)

builder.add_edge(
    "planner",
    END
)

builder.add_edge(
    "browser",
    END
)

graph = builder.compile()

# Run Workflow

async def run_workflow(user_input):

    result = await graph.ainvoke({
        "input": user_input
    })

    return result["output"]