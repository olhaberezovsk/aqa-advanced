function handleEven() {
    console.log("The number is even")
}

function handleOdd() {
    console.log("The number is odd")
}

function handleNum(number, handleEvenCallback, handleOddCallBack) {
    if (number % 2 === 0) {
        handleEvenCallback();
    } else {
        handleOddCallBack();
    }
}

handleNum(5, handleEven, handleOdd);
handleNum(6, handleEven, handleOdd);