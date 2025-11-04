import { describe, it, expect } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import StatusBadge from '../../src/components/StatusBadge.vue';

describe('StatusBadge', () => {
    it('should show success badge when status is success', () => {
        // Arrange
        const status = 'success';

        // Act
        const wrapper = shallowMount(StatusBadge, { props: { status } });

        // Assert
        expect(wrapper.find('.badge-success').exists()).toBe(true);
        expect(wrapper.find('.badge-warning').exists()).toBe(false);
        expect(wrapper.find('.badge-error').exists()).toBe(false);
    });

    it('should show error badge when status is error', () => {
        // Arrange
        const status = 'error';

        // Act
        const wrapper = shallowMount(StatusBadge, { props: { status } });

        // Assert
        expect(wrapper.find('.badge-error').exists()).toBe(true);
        expect(wrapper.find('.badge-success').exists()).toBe(false);
        expect(wrapper.find('.badge-warning').exists()).toBe(false);
    });

    it('should show warning badge when status is warning', () => {
        // Arrange
        const status = 'warning';
        // Act
        const wrapper = shallowMount(StatusBadge, { props: { status } });
        // Assert
        expect(wrapper.find('.badge-warning').exists()).toBe(true);
        expect(wrapper.find('.badge-success').exists()).toBe(false);
        expect(wrapper.find('.badge-error').exists()).toBe(false);
    });

    it('should not show any badge for unknown status', () => {
        // Arrange
        const status = 'unknown';
        // Act
        const wrapper = shallowMount(StatusBadge, { props: { status } });
        // Assert
        expect(wrapper.find('.badge-success').exists()).toBe(false);
        expect(wrapper.find('.badge-warning').exists()).toBe(false);
        expect(wrapper.find('.badge-error').exists()).toBe(false);
    });

    it('should not show any badge when an empty status is provided', () => {
        // Arrange
        const status = '';
        // Act
        const wrapper = shallowMount(StatusBadge, { props: { status } });
        // Assert
        expect(wrapper.find('.badge-success').exists()).toBe(false);
        expect(wrapper.find('.badge-warning').exists()).toBe(false);
        expect(wrapper.find('.badge-error').exists()).toBe(false);
    });
});