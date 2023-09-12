function multiply(num1: number, num2: number): number {
    return num1 * num2;
}

function sum(num1: number, num2: number): number {
    return num1 + num2;
}

function isEven(num: number): boolean {
    return num % 2 === 0;
}

function showResult(result: number) {
    if (isEven(result)) {
        console.log(`O resultado é ${result} e é um número par!`);
    } else {
        console.log(`O resultado é ${result} e não é um número par!`);
    }
}

/// números

const num1 = 5; 
const num2 = 3; 

if (isNaN(num1) || isNaN(num2)) {
    console.log("Entrada inválida. Por favor, digite números válidos.");
} else {
    const result: number = sum(num1, num2);
    showResult(result);
}