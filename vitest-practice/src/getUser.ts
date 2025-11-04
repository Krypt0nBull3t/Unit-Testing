export type User = {id: number; name: string; active: boolean};

const users: User[] = [
    {id: 1, name: 'Anna', active: true},
    {id: 2, name: 'Bram', active: false},
    {id: 3, name: 'Cem', active: true},
];

export const getUser = (id: number): User | undefined => {
    if (id < 0) return undefined;
    return users.find(u => u.id === id);
};

export const getAllUsers = () => [...users]; // copy to verify immutability in tests