function ageVerifyingDeclaration (age) {
    return age >= 18
}

console.log("Age Verifying Declaration, the age is 15 - ", ageVerifyingDeclaration(15));
console.log("Age Verifying Declaration, the age is  25 - ", ageVerifyingDeclaration(25));

/////////////////////////////////////////////////////////

const ageVerifyingExpression = function (age) {
    return age >= 18;
}

console.log("Age Verifying Expression, the age is 15 - ", ageVerifyingExpression(15));
console.log("Age Verifying Expression, the age is  25 - ", ageVerifyingExpression(25));

////////////////////////////////////////////////////////

const ageVerifyingArrow = (age) => age >= 18;

console.log("Age Verifying Arrow, the age is 15 - ", ageVerifyingArrow(15));
console.log("Age Verifying Arrow, the age is  25 - ", ageVerifyingArrow(25));