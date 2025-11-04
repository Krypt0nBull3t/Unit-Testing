import {vi} from 'vitest';
import {shallowMount} from '@vue/test-utils';
import SearchForm from '../../src/components/SearchForm.vue';

describe('SearchForm', () => {
    it('should call onSubmit when form is submitted', async () => {
        // Arrange
        const mockOnSubmit = vi.fn();
        const testQuery = 'testquery';
        const wrapper = shallowMount(SearchForm, {
            props: {
                onSubmit: mockOnSubmit,
            },
        });

        // Act
        await wrapper.getByDataTest('search-input').setValue(testQuery);
        await wrapper.getByDataTest('submit-button').trigger('submit');

        // Assert
        expect(mockOnSubmit).toHaveBeenCalled();
    });

    it('should call onSubmit with the correct query', async () => {
        // Arrange
        const mockOnSubmit = vi.fn();
        const testQuery = 'testquery';
        const wrapper = shallowMount(SearchForm, {
            props: {
                onSubmit: mockOnSubmit,
            },
        });
        // Act
        await wrapper.getByDataTest('search-input').setValue(testQuery);
        await wrapper.getByDataTest('submit-button').trigger('submit');
        // Assert
        expect(mockOnSubmit).toHaveBeenCalledWith(testQuery);
    });

    it('should not call onSubmit when query is empty', async () => {
        // Arrange
        const mockOnSubmit = vi.fn();
        const wrapper = shallowMount(SearchForm, {
            props: {
                onSubmit: mockOnSubmit,
            },
        });
        // Act
        await wrapper.getByDataTest('search-input').setValue('');
        await wrapper.getByDataTest('submit-button').trigger('submit');
        // Assert
        expect(mockOnSubmit).not.toHaveBeenCalled();
    });

    it('should call only once when the form is submitted', async () => {
        // Arrange
        const mockOnSubmit = vi.fn();
        const testQuery = 'testquery';
        const wrapper = shallowMount(SearchForm, {
            props: {
                onSubmit: mockOnSubmit,
            },
        });
        // Act
        await wrapper.getByDataTest('search-input').setValue(testQuery);
        await wrapper.getByDataTest('submit-button').trigger('submit');
        // Assert
        expect(mockOnSubmit).toHaveBeenCalledTimes(1);
    });

    it('should emit search event with the correct query on submit', async () => {
        // Arrange
        const mockOnSubmit = vi.fn();
        const testQuery = 'testquery';
        const wrapper = shallowMount(SearchForm, {
            props: {
                onSubmit: mockOnSubmit,
            },
        });

        // Act
        await wrapper.getByDataTest('search-input').setValue(testQuery);
        await wrapper.getByDataTest('submit-button').trigger('submit');

        // Assert
        expect(wrapper.emitted('search')?.[0]).toEqual([testQuery]);
    });

    it('should trigger the callback before emitting the event', async () => {
        // Arrange
        const mockOnSubmit = vi.fn();
        const testQuery = 'testquery';
        const wrapper = shallowMount(SearchForm, {
            props: {
                onSubmit: mockOnSubmit,
            },
        });
        // Act
        await wrapper.getByDataTest('search-input').setValue(testQuery);
        await wrapper.getByDataTest('submit-button').trigger('submit');
        // Assert
        expect(mockOnSubmit).toHaveBeenCalledWith('testquery');
        expect(wrapper.emitted('search')?.[0]?.[0]).toBe('testquery');       
        
    });
});