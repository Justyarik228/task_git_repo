"use strict";
// 1
const myFunction = (a, b) => {
    let count = 0;
    let sum = 0;
    for (let i = a; i <= b; i++) {
        if (i % 2 == 0) {
            sum += i;
            count++;
        }
    }
    console.log(`Сумма четных чисел в диапазоне равна: ${sum}`, `Количество четных чисел в диапазоне равно: ${count}`);
};


myFunction(1,4)
// 2
function isPrime(num) {
    if (num < 2) {
        return false;
    }
    else if (num === 2) {
        return true;
    }
    let i = 2;
    const limit = Math.sqrt(num);
    while (i <= limit) {
        if (num % i === 0) {
            return false;
        }
        i += 1;
    }
    return true;
}
;
console.log(isPrime(7));
// 3
function getSqrtBySequentialSelection(number) {
    if (number <= 0) {
        console.log(0);
    }
    const epsilon = 1e-10; // Точность до 10 знаков после запятой
    let approx = number / 2;
    while (Math.abs(approx * approx - number) > epsilon) {
        approx = 0.5 * (approx + number / approx);
    }
    if (approx % 1 === 0) {
        console.log(approx.toFixed(0));
    }
    else
        (console.log(approx.toFixed(10)));
}
getSqrtBySequentialSelection(4);
function getSqrtByBinarySearch(number) {
    if (number <= 0) {
        console.log(0);
    }
    let low = 0;
    let high = number;
    let mid = (low + high) / 2;
    while (Math.abs(mid * mid - number) > 1e-10) {
        if (mid * mid > number) {
            high = mid;
        }
        else {
            low = mid;
        }
        mid = (low + high) / 2;
    }
    if (mid % 1 === 0) {
        console.log(mid.toFixed(0));
    }
    else
        (console.log(mid.toFixed(10)));
}
getSqrtByBinarySearch(3);
const getFactorial = (n) => {
    let result = 1;
    if (n === 0) {
        console.log(result);
    }
    else {
        for (let i = 1; i <= n; i++) {
            result *= i;
        }
    }
    console.log(result);
};
getFactorial(4);
// 5
const digitSum = (y) => {
    let strY = Array.from(String(y));
    let sum = strY.reduce((previousValue, curentValue) =>Number(previousValue) + Number(curentValue));
    console.log(sum);
};
digitSum(5659);



