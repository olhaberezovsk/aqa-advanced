const car1 = {
    brand: "Audi",
    model: "Q7",
    owner: "John",
}

const car2 = {
    brand: "BMW",
    model: "X5",
    owner: "Mark",
}

const car3 = {
    car1: {...car1},
    car2: {...car2},
}

console.log(car3);