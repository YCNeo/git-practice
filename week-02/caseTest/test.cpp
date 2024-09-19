#include <iostream>
#include <chrono>

int sum1(int n) {
    int result = 0;
    for (int i = 1; i <= n; i++) {
        result += i;
    }
    return result;
}

int sum2(int n) {
    return (n * (n + 1)) / 2;
}

int main() {
    int times = 100;  // Increased iterations
    int number = 10;

    // Timing sum1
    auto start = std::chrono::steady_clock::now();
    for (int i = 0; i < times; i++) {
        sum1(number);
    }
    auto end = std::chrono::steady_clock::now();
    auto elapsed = std::chrono::duration_cast<std::chrono::microseconds>(end - start);
    std::cout << "sum1: " << elapsed.count() / 1000.0 << "ms" << std::endl;

    // Timing sum2
    start = std::chrono::steady_clock::now();
    for (int i = 0; i < times; i++) {
        sum2(number);
    }
    end = std::chrono::steady_clock::now();
    elapsed = std::chrono::duration_cast<std::chrono::microseconds>(end - start);
    std::cout << "sum2: " << elapsed.count() / 1000.0 << "ms" << std::endl;

    return 0;
}
