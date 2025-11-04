import { removeSpaces } from "../src/removeSpaces";

describe('removeSpaces function', () => {
    it('should remove all spaces from a string with spaces', () => {
        // Arrange
        const input = 'Hello World';
        const expectedOutput = 'HelloWorld';
        // Act
        const result = removeSpaces(input);
        // Assert
        expect(result).toEqual(expectedOutput);
    });

    it('should return the same string if there are no spaces', () => {
        // Arrange
        const input = 'HelloWorld';
        const expectedOutput = 'HelloWorld';
        // Act
        const result = removeSpaces(input);
        // Assert
        expect(result).toEqual(expectedOutput);
    });

    it('should handle an empty string', () => {
        // Arrange
        const input = '';
        const expectedOutput = '';
        // Act
        const result = removeSpaces(input);
        // Assert
        expect(result).toEqual(expectedOutput);
    });

   it('should handle a string with multiple spaces', () => {
       // Arrange
       const input = '  Hello   World  ';
       const expectedOutput = 'HelloWorld';
       // Act
       const result = removeSpaces(input);
       // Assert
       expect(result).toEqual(expectedOutput);
   });

    it('should handle a string with only spaces', () => {
        // Arrange
        const input = '       ';
        const expectedOutput = '';
        // Act
        const result = removeSpaces(input);
        // Assert
        expect(result).toEqual(expectedOutput);
    });

    it('should handle a string with spaces and special characters', () => {
        // Arrange
        const input = ' H e l l o ! @ # $ % ^ & * ( ) ';
        const expectedOutput = 'Hello!@#$%^&*()';
        // Act
        const result = removeSpaces(input);
        // Assert
        expect(result).toEqual(expectedOutput);
    });
});
