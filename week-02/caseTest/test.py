import time


def sum1(n):
    result = 0
    for i in range(1, n + 1):
        result += i
    return result


def sum2(n):
    return (n * (n + 1)) // 2


times = 1000000  # Increased iterations
number = 10

# Timing sum1
start_time = time.perf_counter()
for _ in range(times):
    sum1(number)
end_time = time.perf_counter()
elapsed_time = (end_time - start_time) * 1000  # Convert to milliseconds
print(f"sum1: {elapsed_time:.5f}ms")

# Timing sum2
start_time = time.perf_counter()
for _ in range(times):
    sum2(number)
end_time = time.perf_counter()
elapsed_time = (end_time - start_time) * 1000
print(f"sum2: {elapsed_time:.5f}ms")
