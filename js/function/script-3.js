//Констурутор функции

let mathOperations = ["return a + b + c", "return a * b", "return a - b - c", "return b / c"];

function performMathOperation(a, b, c) {
    const func = new Function('a, b, c', mathOperations.sort(() => Math.random() - 0.5)[0]);

    console.log(func(a, b, c));
}

performMathOperation(1,2,3);
performMathOperation(1,2,3);
performMathOperation(1,2,3);
performMathOperation(1,2,3);
