import {shallowMount} from '@vue/test-utils';
import LoginForm from '../../src/components/LoginForm.vue';

describe('LoginForm', () => {
    it('should update email when user types in email field', async () => {
        // Arrange
        const wrapper = shallowMount(LoginForm);
        const emailInput = wrapper.find('#email');

        // Act
        await emailInput.setValue('test@example.com');

        // Assert
        expect((emailInput.element as HTMLInputElement).value).toBe('test@example.com');
    });

    it('should emit submit event with email and password when form is submitted', async () => {
        // Arrange
        const wrapper = shallowMount(LoginForm);
        const emailInput = wrapper.find('#email');
        const passwordInput = wrapper.find('#password');
        const form = wrapper.find('form');

        // Act
        await emailInput.setValue('user@example.com');
        await passwordInput.setValue('secret123');
        await form.trigger('submit');

        // Assert
        expect(wrapper.emitted('submit')?.[0]).toStrictEqual(
            [{email: 'user@example.com', password: 'secret123'}],
        );
    });

    it('should show error when form is submitted with empty fields', async () => {
        // Arrange
        const wrapper = shallowMount(LoginForm);
        const form = wrapper.find('form');

        // Act
        await form.trigger('submit');

        // Assert
        expect(wrapper.find('.error').text()).toBe('Vul alle velden in');
        expect(wrapper.emitted('submit')).toBeFalsy();
    });

    it('should have clear fields on mount', () => {
        // Arrange
        const wrapper = shallowMount(LoginForm);
        const emailInput = wrapper.find('#email');
        const passwordInput = wrapper.find('#password');

        // Act & Assert
        expect((emailInput.element as HTMLInputElement).value).toBe('');
        expect((passwordInput.element as HTMLInputElement).value).toBe('');
    });

    it('should throw an error message if no password is provided', async () => {
        // Arrange
        const wrapper = shallowMount(LoginForm);
        const emailInput = wrapper.find('#email');
        const form = wrapper.find('form');

        // Act
        await emailInput.setValue('user@example.com');
        await form.trigger('submit');

        // Assert
        expect(wrapper.find('.error').text()).toBe('Vul alle velden in');
        expect(wrapper.emitted('submit')).toBeFalsy();
    });

    it('should throw an error message if no email is provided', async () => {
        // Arrange
        const wrapper = shallowMount(LoginForm);
        const passwordInput = wrapper.find('#password');
        const form = wrapper.find('form');

        // Act
        await passwordInput.setValue('secret123');
        await form.trigger('submit');

        // Assert
        expect(wrapper.find('.error').text()).toBe('Vul alle velden in');
        expect(wrapper.emitted('submit')).toBeFalsy();
    });

    it('should update password when user types in password field', async () => {
        // Arrange
        const wrapper = shallowMount(LoginForm);
        const passwordInput = wrapper.find('#password');

        // Act
        await passwordInput.setValue('secret123');

        // Assert
        expect((passwordInput.element as HTMLInputElement).value).toBe('secret123');
    });
});