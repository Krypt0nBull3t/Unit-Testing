import { shallowMount } from '@vue/test-utils';
import RegistrationForm from '../../src/components/RegistrationForm.vue';

describe('RegistrationForm', () => {
    it('should be an empty form on mount', () => {
        // Act
        const wrapper = shallowMount(RegistrationForm);

        // Assert
        expect(wrapper.find('#email').element.value).toBe('');
        expect(wrapper.find('#password').element.value).toBe('');
        expect(wrapper.find('#confirmPassword').element.value).toBe('');
        expect(wrapper.find('#acceptTerms').element.checked).toBe(false);
        expect(wrapper.find('.error').exists()).toBe(false);
    });



    it('should emit submit event with form data on submit', async () => {
        // Arrange
        const wrapper = shallowMount(RegistrationForm);
        const email = wrapper.find('#email');
        const password = wrapper.find('#password');
        const confirmPassword = wrapper.find('#confirmPassword');
        const acceptTerms = wrapper.find('#acceptTerms');
        const form = wrapper.find('form');

        // Act
        await email.setValue('test@example.com');
        await password.setValue('password123');
        await confirmPassword.setValue('password123');
        await acceptTerms.setChecked(true);
        await form.trigger('submit');

        // Assert
        expect(wrapper.emitted('submit')?.[0]).toMatchObject(
            [{
                email: 'test@example.com',
                password: 'password123',
                confirmPassword: 'password123',
                acceptTerms: true
            }],
        );
    });

    it('should show error if passwords do not match on submit', async () => {
        // Arrange
        const wrapper = shallowMount(RegistrationForm);
        const email = wrapper.find('#email');
        const password = wrapper.find('#password');
        const confirmPassword = wrapper.find('#confirmPassword');
        const acceptTerms = wrapper.find('#acceptTerms');
        const form = wrapper.find('form');

        // Act
        await email.setValue('test@example.com');
        await password.setValue('password123');
        await confirmPassword.setValue('password456');
        await acceptTerms.setChecked(true);
        await form.trigger('submit');

        // Assert
        expect(wrapper.find('.error').exists()).toBe(true);
        expect(wrapper.find('.error').text()).toBe('Wachtwoorden komen niet overeen');
        expect(wrapper.emitted('submit')).toBeFalsy();
    });

    it('should show error if terms are not accepted on submit', async () => {
        // Arrange
        const wrapper = shallowMount(RegistrationForm);
        const email = wrapper.find('#email');
        const password = wrapper.find('#password');
        const confirmPassword = wrapper.find('#confirmPassword');
        const acceptTerms = wrapper.find('#acceptTerms');
        const form = wrapper.find('form');
        // Act
        await email.setValue('test@example.com');
        await password.setValue('password123');
        await confirmPassword.setValue('password123');
        await acceptTerms.setChecked(false);
        await form.trigger('submit');
        // Assert
        expect(wrapper.find('.error').exists()).toBe(true);
        expect(wrapper.find('.error').text()).toBe('Je moet de voorwaarden accepteren');
        expect(wrapper.emitted('submit')).toBeFalsy();
    });

    it('should show an error if any field is empty on submit', async () => {
        // Arrange
        const wrapper = shallowMount(RegistrationForm);
        const form = wrapper.find('form');

        // Act
        await form.trigger('submit');

        // Assert
        expect(wrapper.find('.error').exists()).toBe(true);
        expect(wrapper.find('.error').text()).toBe('Vul alle velden in');
        expect(wrapper.emitted('submit')).toBeFalsy();
    });

    it('should prevent submit when validation fails', async () => {
        // Arrange
        const wrapper = shallowMount(RegistrationForm);
        const email = wrapper.find('#email');
        const password = wrapper.find('#password');
        const confirmPassword = wrapper.find('#confirmPassword');
        const acceptTerms = wrapper.find('#acceptTerms');
        const form = wrapper.find('form');

        // Act
        await email.setValue('test@example.com');
        await password.setValue('passwor'); // Password too short
        await confirmPassword.setValue('passwor'); // Password too short
        await acceptTerms.setChecked(true);
        await form.trigger('submit');

        // Assert
        expect(wrapper.find('.error').exists()).toBe(true);
        expect(wrapper.find('.error').text()).toBe('Wachtwoord moet minimaal 8 karakters zijn');
        expect(wrapper.emitted('submit')).toBeFalsy();
    });
});