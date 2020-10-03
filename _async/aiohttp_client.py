import aiohttp
import asyncio

async def fetch(session, url):
    async with session.get(url) as response:
        return await response.text()

async def main():
    async with aiohttp.ClientSession() as session:
        resp = await fetch(session, 'http://python.org')
        print(resp)

if __name__ == '__main__':
    loop = asyncio.get_event_loop()
    loop.run_until_complete(main())