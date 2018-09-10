export function add(x, y) {
    return x + y;
}

export const substract = (x, y) => {
    return x - y;
}

export const multiply = (x, y) => x * y;

export const divide = (x, y) => y ? x / y : 'Cannot divide by zero';

export default "This a default export!"