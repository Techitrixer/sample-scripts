import asyncio

async def sample_process():
    print("process 1")
    await asyncio.sleep(1)
    print("process 2")

async def main():
    await asyncio.gather(sample_process(), sample_process(), sample_process())

if __name__ == "__main__":
    import time
    s = time.perf_counter()
    asyncio.run(main())
    elapsed = time.perf_counter() - s
    print("program executed in ", elapsed)
