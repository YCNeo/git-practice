#include <stdio.h>
#include <sys/time.h>

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
    int times = 100;        // Increased iterations for better timing
    int number = 10;
    struct timeval start, end;
    double elapsed_time;

    // Timing sum1
    gettimeofday(&start, NULL);
    for (int i = 0; i < times; i++) {
        sum1(number);
    }
    gettimeofday(&end, NULL);
    elapsed_time = (end.tv_sec - start.tv_sec) * 1000.0;           // sec to ms
    elapsed_time += (end.tv_usec - start.tv_usec) / 1000.0;        // us to ms
    printf("sum1: %fms\n", elapsed_time);

    // Timing sum2
    gettimeofday(&start, NULL);
    for (int i = 0; i < times; i++) {
        sum2(number);
    }
    gettimeofday(&end, NULL);
    elapsed_time = (end.tv_sec - start.tv_sec) * 1000.0;
    elapsed_time += (end.tv_usec - start.tv_usec) / 1000.0;
    printf("sum2: %fms\n", elapsed_time);

    return 0;
}
