// Task 1.1 - function declaration

function getFirstArea(width, height) {
    return width * height;
}
const firstRectangleArea = getFirstArea(5, 10);
console.log(`Task 1.1 Rectangle area = ${firstRectangleArea}`);

// Task 1.2 - function expression

const getSecondArea = function (width, height) {
    return width * height;
}
const secondRectangleArea = getSecondArea(7, 15);
console.log(`Task 1.2 Rectangle area = ${secondRectangleArea}`);

// Task 1.3 - arrow function

const getThirdArea = (width, height) => width * height;
const thirdRectangleArea = getThirdArea(4, 9);
console.log(`Task 1.3 Rectangle area = ${thirdRectangleArea}`);
