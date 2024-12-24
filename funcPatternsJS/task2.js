function recursionCountdown(num) {
    console.log(num);
    if (num > 0) {
        recursionCountdown(num - 1)
    }
}

recursionCountdown(10);