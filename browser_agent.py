from tools.browser_tools import (
    google_search
)

async def browser_agent(user_input):

    result = await google_search(
        user_input
    )

    return result