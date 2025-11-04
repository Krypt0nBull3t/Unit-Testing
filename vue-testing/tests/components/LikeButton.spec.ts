import { shallowMount } from '@vue/test-utils';
import { ref } from 'vue';
import LikeButton from '../../src/components/LikeButton.vue';

describe('LikeButton', () => {
    it('should render Like button initially', () => {
        // Arrange
        const liked = ref(false);
        // Act
        const wrapper = shallowMount(LikeButton);
        // Assert
        expect(wrapper.text()).toContain('🤍 Like');
    });
    it('should render Unlike button after clicking Like', async () => {
        // Arrange
        const liked = ref(false);
        // Act
        const wrapper = shallowMount(LikeButton);
        await wrapper.find('button').trigger('click');
        // Assert
        expect(wrapper.text()).toContain('❤️ Liked');
    });
    it('should emit like event when Like button is clicked', async () => {
        // Arrange
        const liked = ref(false);
        // Act
        const wrapper = shallowMount(LikeButton);
        await wrapper.find('button').trigger('click');
        // Assert
        expect(wrapper.emitted('like')).toBeTruthy();
    });
    it('should emit unlike event when Unlike button is clicked', async () => {
        // Arrange
        const liked = ref(false);
        // Act
        const wrapper = shallowMount(LikeButton);
        await wrapper.find('button').trigger('click');
        await wrapper.find('button').trigger('click');
        // Assert
        expect(wrapper.emitted('unlike')).toBeTruthy();
    });
    it('should render count when provided', async () => {
        // Arrange
        const count = 1;
        // Act
        const wrapper = shallowMount(LikeButton, { props: { count } });
        // Assert
        expect(wrapper.text()).toContain('(1)');
    });
    it('should not render count when not provided', () => {
        // Arrange
        const count = undefined;
        // Act
        const wrapper = shallowMount(LikeButton, { props: { count } });
        // Assert
        expect(wrapper.text()).not.toContain('(');
    });
});