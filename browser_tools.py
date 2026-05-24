from playwright.async_api import async_playwright

async def google_search(query):

    async with async_playwright() as p:

        browser = await p.chromium.launch(
            headless=False
        )

        page = await browser.new_page()

        await page.goto(
            "https://www.google.com"
        )

        await page.fill(
            'textarea[name="q"]',
            query
        )

        await page.keyboard.press(
            "Enter"
        )

        await page.wait_for_timeout(
            5000
        )

        title = await page.title()

        await browser.close()

        return f"""
        Browser Agent completed task.

        Search Query:
        {query}

        Current Page:
        {title}
        """