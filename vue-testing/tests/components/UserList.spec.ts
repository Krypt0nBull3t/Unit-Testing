import {shallowMount} from '@vue/test-utils';
import UserList from '../../src/components/UserList.vue';

describe('UserList', () => {
    it('should render a list of users', () => {
        // Arrange
        const users = [
            {id: 1, name: 'Alice', email: 'alice@example.com'},
            {id: 2, name: 'Bob', email: 'bob@example.com'},
        ];
        // Act
        const wrapper = shallowMount(UserList, {
            props: {users},
        });

        // Assert
        expect(wrapper.getByDataTest('user-list').exists()).toBe(true);
        expect(wrapper.findAll('[data-test="user-item"]')).toHaveLength(users.length);
    });

    it('should correctly render the name of the first user', () => {
        // Arrange
        const users = [
            {id: 1, name: 'Charlie', email: 'charlie@example.com'},
            {id: 2, name: 'Dave', email: 'dave@example.com'},
        ];
        // Act
        const wrapper = shallowMount(UserList, {
            props: {users},
        });

        // Assert
        expect(wrapper.findAll('[data-test=user-name]')[0].text()).toBe('Charlie');
    });

    it('should correctly render the email of the first user', () => {
        // Arrange
        const users = [
            {id: 1, name: 'Eve', email: 'eve@example.com'},
            {id: 2, name: 'Frank', email: 'frank@example.com'},
        ];
        // Act
        const wrapper = shallowMount(UserList, {
            props: {users},
        });
        // Assert
        expect(wrapper.getByDataTest('user-email').text()).toBe('eve@example.com');
    });

    it('should render a delete button for each user', () => {
        // Arrange
        const users = [
            {id: 1, name: 'Grace', email: 'grace@example.com'},
            {id: 2, name: 'Heidi', email: 'heidi@example.com'},
        ];
        // Act
        const wrapper = shallowMount(UserList, {
            props: {users},
        });
        // Assert
        expect(wrapper.findAll('[data-test="delete-button"]')).toHaveLength(users.length);
    });

    it('should render the empty-state message when no users are provided', () => {
        // Arrange
        const users = [];
        // Act
        const wrapper = shallowMount(UserList, {
            props: {users},
        });
        // Assert
        expect(wrapper.getByDataTest('empty-state').exists()).toBe(true);
    });

    it('should not render the user list when no users are provided', () => {
        // Arrange
        const users = [];
        // Act
        const wrapper = shallowMount(UserList, {
            props: {users},
        });
        // Assert
        expect(wrapper.find('[data-test="user-list"]').exists()).toBe(false);
    });

    it('should not render the empty-state message when users are provided', () => {
        // Arrange
        const users = [
            {id: 1, name: 'Ivan', email: 'ivan@example.com'},
            {id: 2, name: 'Judy', email: 'judy@example.com'},
        ];
        // Act
        const wrapper = shallowMount(UserList, {
            props: {users},
        });
        // Assert
        expect(wrapper.find('[data-test="empty-state"]').exists()).toBe(false);
    });
});