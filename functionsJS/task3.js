function checkOrder(available, ordered) {
    if (ordered === 0) {
            return "Your order is empty."
    } else if (ordered > available) {
            return "Your order is too large, we don’t have enough goods.";
    } else {
             return "Your order is accepted.";
    }
}

console.log(checkOrder(500, 501))
console.log(checkOrder(25, 10))
console.log(checkOrder(80, 0))