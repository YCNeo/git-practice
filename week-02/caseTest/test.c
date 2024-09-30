// test.c
#include <stdio.h>
#include <sys/time.h>

int sum1(int n) {
    int result = 0;
    for (int i = 1; i <= n; i++)
        result += i;
    return result;
}

int sum2(int n) {
    int result = (n * (n + 1)) / 2;
    return result;
}

int main() {
    int times = 100;        // Increased iterations
    int number = 10;
    long long int total_result = 0;
    struct timeval start, end;
    double elapsed_time = 0;

    // Timing sum1
    gettimeofday(&start, NULL);
    for (int i = 0; i < times; i++) {
        total_result += sum1(number);
    }
    gettimeofday(&end, NULL);
    elapsed_time = (end.tv_sec - start.tv_sec) * 1000.0;           // sec to ms
    elapsed_time += (end.tv_usec - start.tv_usec) / 1000.0;        // us to ms
    printf("sum1: %.3fms\n", elapsed_time);

    // Reset total_result
    total_result = 0;

    // Timing sum2
    gettimeofday(&start, NULL);
    for (int i = 0; i < times; i++) {
        total_result += sum2(number);
    }
    gettimeofday(&end, NULL);
    elapsed_time = (end.tv_sec - start.tv_sec) * 1000.0;           // sec to ms
    elapsed_time += (end.tv_usec - start.tv_usec) / 1000.0;        // us to ms
    printf("sum2: %.3fms\n", elapsed_time);

    // Reset total_result
    total_result = 0;

    // Timing sum3
    gettimeofday(&start, NULL);
    for (int i = 0; i < times; i++) {
        total_result += sum1(number);
    }
    gettimeofday(&end, NULL);
    elapsed_time = (end.tv_sec - start.tv_sec) * 1000.0;           // sec to ms
    elapsed_time += (end.tv_usec - start.tv_usec) / 1000.0;        // us to ms
    printf("sum3: %.3fms\n", elapsed_time);

    // Reset total_result
    total_result = 0;

    // Timing sum4
    gettimeofday(&start, NULL);
    for (int i = 0; i < times; i++) {
        total_result += sum2(number);
    }
    gettimeofday(&end, NULL);
    elapsed_time = (end.tv_sec - start.tv_sec) * 1000.0;           // sec to ms
    elapsed_time += (end.tv_usec - start.tv_usec) / 1000.0;        // us to ms
    printf("sum4: %.3fms\n", elapsed_time);

    return 0;
}
