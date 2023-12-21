const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

export const findNthPrime = (n) => {
    if (n === 1) return 2; // First prime number

    let count = 1; // Starting from the second prime number
    let candidate = 3; // Starting from the first odd prime number after 2

    while (count < n) {
        if (isPrime(candidate)) {
            count++;
        }
        if (count < n) {
            candidate += 2; // Move to the next odd number
        }
    }

    return candidate;
};
