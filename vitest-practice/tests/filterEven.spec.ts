import { filterEven } from "../src/filterEven";

describe('filterEven function', () => {
    it('should return only even numbers from a mixed array', () => {
        // Arrange
        const input = [1, 2, 3, 4, 5, 6];
        const expectedOutput = [2, 4, 6];
        // Act
        const result = filterEven(input);
        // Assert
        expect(result).toEqual(expectedOutput);
        expect(result).toHaveLength(3);
    });

    it('should return the array if all numbers are even', () => {
        // Arrange
        const input = [2, 4, 6];
        const expectedOutput = [2, 4, 6];
        // Act
        const result = filterEven(input);
        // Assert
        expect(result).toEqual(expectedOutput);
        expect(result).toHaveLength(3);
    });

    it('should return an empty array if there are no even numbers', () => {
        // Arrange
        const input = [1, 3, 5];
        const expectedOutput: number[] = [];
        // Act
        const result = filterEven(input);
        // Assert
        expect(result).toEqual(expectedOutput);
        expect(result).toHaveLength(0);
    });

    it('should handle an empty array', () => {
        // Arrange
        const input: number[] = [];
        const expectedOutput: number[] = [];
        // Act
        const result = filterEven(input);
        // Assert
        expect(result).toEqual(expectedOutput);
        expect(result).toHaveLength(0);
    });

    it('should handle an array with zero', () => {
        // Arrange
        const input = [0, 1, 2];
        const expectedOutput = [0, 2];
        // Act
        const result = filterEven(input);
        // Assert
        expect(result).toEqual(expectedOutput);
        expect(result).toHaveLength(2);
    });

    it('should handle an array with negative numbers', () => {
        // Arrange
        const input = [-2, -1, 0, 1, 2];
        const expectedOutput = [-2, 0, 2];
        // Act
        const result = filterEven(input);
        // Assert
        expect(result).toEqual(expectedOutput);
        expect(result).toHaveLength(3);
    });
});