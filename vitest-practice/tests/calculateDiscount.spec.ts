import { calculateDiscount } from "../src/calculateDiscount";

describe('calculateDiscount function', () => {
    it('should return correct discount for normal values', () => {
        // Arrange
        const price = 100;
        const discount = 20;
        const expectedResult = 80;
        // Act
        const result = calculateDiscount(price, discount);
        // Assert
        expect(result).toBe(expectedResult);
    });

    it('should return original price when discount is 0', () => {
        // Arrange
        const price = 50;
        const discount = 0;
        const expectedResult = 50;
        // Act
        const result = calculateDiscount(price, discount);
        // Assert
        expect(result).toBe(expectedResult);
    });

    it('should return 0 when discount is 100%', () => {
        // Arrange
        const price = 80;
        const discount = 100;
        const expectedResult = 0;
        // Act
        const result = calculateDiscount(price, discount);
        // Assert
        expect(result).toBe(expectedResult);
    });

    it('should handle negative discount values by returning an error', () => {
        // Arrange
        const price = 100;
        const discount = -10;
        const expectedResult = 'Discount must be between 0 and 100';
        // Act & Assert
        expect(() => calculateDiscount(price, discount)).toThrowError(expectedResult);
    });

    it('should handle discount values greater than 100 by returning an error', () => {
        // Arrange
        const price = 100;
        const discount = 150;
        const expectedResult = 'Discount must be between 0 and 100';
        // Act & Assert
        expect(() => calculateDiscount(price, discount)).toThrowError(expectedResult);
    });

    it('should handle zero price correctly', () => {
        // Arrange
        const price = 0;
        const discount = 20;
        const expectedResult = 0;
        // Act
        const result = calculateDiscount(price, discount);
        // Assert
        expect(result).toBe(expectedResult);
    });

    it('should handle negative price values by returning an error', () => {
        // Arrange
        const price = -50;
        const discount = 10;
        const expectedResult = 'Price cannot be negative';
        // Act & Assert
        expect(() => calculateDiscount(price, discount)).toThrowError(expectedResult);
    });
});
