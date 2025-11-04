import {shallowMount} from '@vue/test-utils';
import Counter from '../../src/components/Counter.vue';

describe('Counter', () => {
    it('should increment count when button is clicked', async () => {
        // Arrange: mount het component
        const wrapper = shallowMount(Counter);

        // Act: simuleer een click op de button
        await wrapper.find('button').trigger('click');

        // Assert: controleer of de count is verhoogd
        expect(wrapper.text()).toContain('Count: 1');
    });

    it('should emit increment event with correct value', async () => {
        // Arrange: mount het component
        const wrapper = shallowMount(Counter);

        // Act: simuleer een click op de button
        await wrapper.find('button').trigger('click');

        // Assert: controleer of het increment event is uitgezonden
        expect(wrapper.emitted('increment')?.[0]).toStrictEqual([1]);
    });

    it('should start with initial count of 0', () => {
        // Arrange & Act: mount het component
        const wrapper = shallowMount(Counter);
        // Assert: controleer of de initiële count 0 is
        expect(wrapper.text()).toContain('Count: 0');
    });

    it('should increment count correctly on multiple clicks', async () => {
        // Arrange: mount het component
        const wrapper = shallowMount(Counter);
        // Act: simuleer meerdere clicks op de button
        await wrapper.find('button').trigger('click');
        await wrapper.find('button').trigger('click');
        await wrapper.find('button').trigger('click');
        // Assert: controleer of de count correct is verhoogd
        expect(wrapper.text()).toContain('Count: 3');
        expect(wrapper.emitted('increment')).toHaveLength(3);
    });

    it('should increment with the correct value after multiple clicks', async () => {
        // Arrange: mount het component
        const wrapper = shallowMount(Counter);
        // Act: simuleer meerdere clicks op de button
        await wrapper.find('button').trigger('click');
        await wrapper.find('button').trigger('click');
        await wrapper.find('button').trigger('click');
        // Assert: controleer of het increment event de juiste waarden heeft
        expect(wrapper.emitted('increment')?.[0]).toStrictEqual([1]);
        expect(wrapper.emitted('increment')?.[1]).toStrictEqual([2]);
        expect(wrapper.emitted('increment')?.[2]).toStrictEqual([3]);
    });
});