function areaRectangleDeclaration (width, height) {
    return width * height;
};

console.log("Declaration - ", areaRectangleDeclaration(8, 6));

/////////////////////////////////////////////////////////

const areaRectangleExpression = function (width, height) {
    return width * height;
};

console.log("Expression - ", areaRectangleExpression(2, 5));

////////////////////////////////////////////////////////

const areaRectangleArrow = (width, height) => width * height;

console.log("Arrow - ", areaRectangleArrow(3, 7));

