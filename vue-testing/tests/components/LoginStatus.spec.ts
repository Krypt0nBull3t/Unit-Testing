import { shallowMount } from '@vue/test-utils';
import LoginStatus from '../../src/components/LoginStatus.vue';

describe('LoginStatus', () => {
    it('should show logged in message when status is loggedIn', () => {
        // Arrange
        const status = 'loggedIn';

        // Act
        const wrapper = shallowMount(LoginStatus, { props: { status } });

        // Assert
        expect(wrapper.find('.welcome').exists()).toBe(true);
        expect(wrapper.find('.logged-out').exists()).toBe(false);
        expect(wrapper.find('.loading').exists()).toBe(false);
    });

    it('should show logged out message when status is loggedOut', () => {
        // Arrange
        const status = 'loggedOut';

        // Act
        const wrapper = shallowMount(LoginStatus, { props: { status } });

        // Assert
        expect(wrapper.find('.logged-out').exists()).toBe(true);
        expect(wrapper.find('.welcome').exists()).toBe(false);
        expect(wrapper.find('.loading').exists()).toBe(false);
    });

    it('should show loading message when status is loading', () => {
        // Arrange
        const status = 'loading';

        // Act
        const wrapper = shallowMount(LoginStatus, { props: { status } });

        // Assert
        expect(wrapper.find('.loading').exists()).toBe(true);
        expect(wrapper.find('.welcome').exists()).toBe(false);
        expect(wrapper.find('.logged-out').exists()).toBe(false);
    });

    it('should show loading message for unknown or empty status', () => {
        // Arrange
        const status = 'unknown' || '';
        // Act
        const wrapper = shallowMount(LoginStatus, { props: { status } });
        // Assert
        expect(wrapper.find('.loading').exists()).toBe(true);
        expect(wrapper.find('.welcome').exists()).toBe(false);
        expect(wrapper.find('.logged-out').exists()).toBe(false);
    });
});