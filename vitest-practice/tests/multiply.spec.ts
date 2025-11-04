import { multiply } from "../src/multiply";

describe('multiply function', () => {
    it('should return correct result when multiplying positive numbers', () => {
        // Arrange
        const firstNumber = 3;
        const secondNumber = 4;
        const expectedResult = 12;
        // Act
        const result = multiply(firstNumber, secondNumber);
        // Assert
        expect(result).toBe(expectedResult);
    });

    it('should return correct result when multiplying a positive and a negative number', () => {
        // Arrange
        const firstNumber = -2;
        const secondNumber = 3;
        const expectedResult = -6;
        // Act
        const result = multiply(firstNumber, secondNumber);
        // Assert
        expect(result).toBe(expectedResult);
    });

    it('should return correct result when multiplying with 0', () => {
        // Arrange
        const firstNumber = 5;
        const secondNumber = 0;
        const expectedResult = 0;
        // Act
        const result = multiply(firstNumber, secondNumber);
        // Assert
        expect(result).toBe(expectedResult);
    });

    it('should return correct result when multiplying with decimals', () => {
        // Arrange
        const firstNumber = 2.5;
        const secondNumber = 4;
        const expectedResult = 10;
        // Act
        const result = multiply(firstNumber, secondNumber);
        // Assert
        expect(result).toBe(expectedResult);
    });

    it('should return correct result when multiplying large numbers', () => {
        // Arrange
        const firstNumber = 1000;
        const secondNumber = 1000;
        const expectedResult = 1000000;
        // Act
        const result = multiply(firstNumber, secondNumber);
        // Assert
        expect(result).toBe(expectedResult);
    });
});
