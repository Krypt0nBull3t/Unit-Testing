import { add } from '../src/math';

describe('add functie', () => {
    it('should add two positive numbers', () => {
        // Arrange
        const a = 2;
        const b = 3;

        // Act
        const result = add(a, b);

        // Assert
        expect(result).toBe(5);
    });

    it('should add two negative numbers', () => {
        // Arrange
        const a = -2;
        const b = -3;

        // Act
        const result = add(a, b);

        // Assert
        expect(result).toBe(-5);
    });

    it('should add 0 and 0', () => {
        // Arrange
        const a = 0;
        const b = 0;

        // Act
        const result = add(a, b);

        // Assert
        expect(result).toBe(0);
    });
    it('should add a positive and a negative number', () => {
        // Arrange
        const a = 5;
        const b = -3;

        // Act
        const result = add(a, b);

        // Assert
        expect(result).toBe(2);
    });
});