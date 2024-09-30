import time


def sum1(n):
    result = 0
    for i in range(1, n + 1):
        result += i
    return result


def sum2(n):
    return (n * (n + 1)) // 2


times = 100000  # Increased iterations
number = 10000

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

# Timing sum3
start_time = time.perf_counter()
for _ in range(times):
    sum1(number)
end_time = time.perf_counter()
elapsed_time = (end_time - start_time) * 1000  # Convert to milliseconds
print(f"sum3: {elapsed_time:.5f}ms")

# Timing sum4
start_time = time.perf_counter()
for _ in range(times):
    sum2(number)
end_time = time.perf_counter()
elapsed_time = (end_time - start_time) * 1000
print(f"sum4: {elapsed_time:.5f}ms")
