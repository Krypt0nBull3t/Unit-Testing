import { capitalize } from "../src/capitalize";

describe('capitalize function', () => {
    it('should capitalize the first letter of a lowercase word', () => {
        // Arrange
        const input = 'hello';
        const expectedOutput = 'Hello';
        // Act
        const result = capitalize(input);
        // Assert
        expect(result).toBe(expectedOutput);
    });
    it('should not change a word that already starts with an uppercase letter', () => {
        // Arrange
        const input = 'Hello';
        const expectedOutput = 'Hello';
        // Act
        const result = capitalize(input);
        // Assert
        expect(result).toBe(expectedOutput);
    });

    it('should handle an empty string', () => {
        // Arrange
        const input = '';
        const expectedOutput = '';
        // Act
        const result = capitalize(input);
        // Assert
        expect(result).toBe(expectedOutput);
    });

    it('should handle a string with only whitespace', () => {
        // Arrange
        const input = '   ';
        const expectedOutput = '   ';
        // Act
        const result = capitalize(input);
        // Assert
        expect(result).toBe(expectedOutput);
    });
 
    it('should handle a string with special characters', () => {
        // Arrange
        const input = '123abc';
        const expectedOutput = '123abc';
        // Act
        const result = capitalize(input);
        // Assert
        expect(result).toBe(expectedOutput);
    });
});