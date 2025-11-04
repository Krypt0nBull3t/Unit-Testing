import { subtract } from "../src/subtract";

describe('subtract function', () => {
    it('should return correct result when subtracting positive numbers', () => {
        // Arrange
        const firstNumber = 10;
        const secondNumber = 3;
        const expectedResult = 7;

        // Act
        const result = subtract(firstNumber, secondNumber);

        // Assert
        expect(result).toBe(expectedResult);
    });

    it('should handle negative numbers correctly', () => {
        // Arrange
        const firstNumber = -5;
        const secondNumber = -3;
        const expectedResult = -2;

        // Act
        const result = subtract(firstNumber, secondNumber);

        // Assert
        expect(result).toBe(expectedResult);
    });

    it('should handle zero correctly', () => {
        // Arrange
        const firstNumber = 5;
        const secondNumber = 0;
        const expectedResult = 5;

        // Act
        const result = subtract(firstNumber, secondNumber);

        // Assert
        expect(result).toBe(expectedResult);
    });

    it('should work with decimal numbers', () => {
        // Arrange
        const firstNumber = 5.5;
        const secondNumber = 2.3;
        const expectedResult = 3.2;

        // Act
        const result = subtract(firstNumber, secondNumber);

        // Assert
        expect(result).toBeCloseTo(expectedResult);
    });
});