import {shallowMount, flushPromises} from '@vue/test-utils';
import {fetchWeather} from '../../src/helpers/fetchWeather';
import WeatherWidget from '../../src/components/WeatherWidget.vue';

// Mock the fetchWeather helper
vi.mock('../../src/helpers/fetchWeather', () => ({
    fetchWeather: vi.fn(),
}));


describe('WeatherWidget with mocked fetchWeather', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    }); 

    it('should render the loading state when API call is in progress', () => {
        // Arrange
        vi.mocked(fetchWeather).mockReturnValue(new Promise(() => {}));
        const props = { city: 'Amsterdam' };

        // Act
        const wrapper = shallowMount(WeatherWidget, { props });

        // Assert
        expect(wrapper.find('.loading').exists()).toBe(true);
    });

    it('should resolve with mocked data', async () => {
        // Arrange
        vi.mocked(fetchWeather).mockResolvedValue({ temperature: 25, description: 'Sunny' });
        const props = { city: 'Amsterdam' };

        // Act
        const weather = await fetchWeather(props.city);

        // Assert
        expect(weather).toEqual({ temperature: 25, description: 'Sunny' });
    });

    it('should display weather data after fetchWeather resolves', async () => {
        // Arrange
        vi.mocked(fetchWeather).mockResolvedValue({ temperature: 20, description: 'Cloudy' });
        const props = { city: 'Amsterdam' };

        // Act
        const wrapper = shallowMount(WeatherWidget, { props });
        // Wait for promises to resolve
        await flushPromises();
        
        // Assert
        expect(wrapper.find('.temperature').text()).toContain('20°C');
        expect(wrapper.find('.description').text()).toBe('Cloudy');
    });

    it('should render an error message when fetchWeather rejects', async () => {
        // Arrange
        vi.mocked(fetchWeather).mockRejectedValue(new Error('API failed'));
        const props = { city: 'Amsterdam' };
        // Act
        const wrapper = shallowMount(WeatherWidget, { props });
        // Wait for promises to resolve
        await flushPromises();
        // Assert
        expect(wrapper.find('.error').text()).toBe('Error: API failed');
    });

    it('should call fetchWeather with the correct city', async () => {
        // Arrange
        const testCity = 'Rotterdam';
        vi.mocked(fetchWeather).mockResolvedValue({ temperature: 22, description: 'Rainy' });
        const props = { city: testCity };
        // Act
        shallowMount(WeatherWidget, { props });
        // Wait for promises to resolve
        await flushPromises();
        // Assert
        expect(fetchWeather).toHaveBeenCalledWith(testCity);
    });

    it('should handle an empty API response gracefully', async () => {
        // Arrange
        vi.mocked(fetchWeather).mockResolvedValue(null);
        const props = { city: 'Amsterdam' };
        // Act
        const wrapper = shallowMount(WeatherWidget, { props });
        // Wait for promises to resolve
        await flushPromises();
        // Assert
        expect(wrapper.find('.empty').exists()).toBe(true);
        expect(wrapper.find('.empty').text()).toBe('No weather data available');
    });
});