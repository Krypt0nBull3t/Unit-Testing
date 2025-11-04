import { getUser, getAllUsers } from "../src/getUser";

describe('getUser function', () => {
    it('should return the correct user for a valid ID', () => {
        // Arrange
        const userId = 1;
        const expectedUser = {id: 1, name: 'Anna'};
        // Act
        const result = getUser(userId);
        // Assert
        expect(result).toMatchObject(expectedUser);
    });

    it('should return undefined for an invalid ID', () => {
        // Arrange
        const userId = 999;
        // Act
        const result = getUser(userId);
        // Assert
        expect(result).toBeUndefined();
    });

    it('should not mutate the users array length when calling getUser', () => {
    // Arrange
    const initialUsers = getAllUsers();
    const initialLength = initialUsers.length;

    // Act
    getUser(1);

    // Assert
    const afterCallUsers = getAllUsers();
    expect(afterCallUsers).toHaveLength(initialLength);
    });

    it('should return undefined for a negative ID (edge case)', () => {
    // Arrange
    const userId = -1;
    // Act
    const result = getUser(userId);
    // Assert
    expect(result).toBeUndefined();

    // Also check array length
    const afterCallUsers = getAllUsers();
    expect(afterCallUsers).toHaveLength(3);
    });
});

describe('getAllUsers function', () => {
    it('should return all users', () => {
        // Arrange
        const expectedUsers = [
            {id: 1, name: 'Anna'},
            {id: 2, name: 'Bram'},
            {id: 3, name: 'Cem'},
        ];
        // Act
        const result = getAllUsers();
        // Assert
        expect(result).toMatchObject(expectedUsers);
    });

    it('should not mutate the users array length when calling getAllUsers', () => {
    // Arrange
    const initialUsers = getAllUsers();
    const initialLength = initialUsers.length;

    // Act
    getAllUsers();

    // Assert
    const afterCallUsers = getAllUsers();
    expect(afterCallUsers).toHaveLength(initialLength);
    });
});
