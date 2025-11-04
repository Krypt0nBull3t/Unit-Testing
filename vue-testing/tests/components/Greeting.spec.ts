import { shallowMount } from '@vue/test-utils';
import Greeting from '../../src/components/Greeting.vue';

describe('Greeting', () => {
    it('should render the name prop', () => {
        // Arrange: Definieer de prop
        const name = 'Vitest';

        // Act: Mount de component met shallowMount
        const wrapper = shallowMount(Greeting, { props: { name } });

        // Assert: Controleer of de naam wordt gerenderd
        expect(wrapper.text()).toContain('Hello, Vitest!');
    });
    it('should render emoji when name is Vitest', () => {
        // Arrange: Definieer de props
        const name = 'Vitest';
        const emoji = '🚀';

        // Act: Mount de component met shallowMount
        const wrapper = shallowMount(Greeting, { props: { name, emoji } });

        // Assert: Controleer of de emoji wordt gerenderd
        expect(wrapper.text()).toContain(emoji);
    });

    it('should not render emoji when emoji prop is not passed', () => {
        // Arrange: Definieer de props
        const name = 'Vitest';
        const emoji = '🚀';

        // Act: Mount de component met shallowMount
        const wrapper = shallowMount(Greeting, { props: { name } });

        // Assert: Controleer of de emoji niet wordt gerenderd
        expect(wrapper.text()).not.toContain(emoji);
    });
});