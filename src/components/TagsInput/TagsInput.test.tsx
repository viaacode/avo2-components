import { fireEvent, render } from '@testing-library/react';

import { TagsInput } from './TagsInput';

const customClass = 'c-tags-input-custom';

const tags = [
	{ label: 'Aluminium', value: 'aluminium' },
	{ label: 'Cadmium', value: 'cadmium' },
	{ label: 'Dubnium', value: 'dubnium' },
	{ label: 'Potassium', value: 'potassium' },
	{ label: 'Vanadium', value: 'vanadium' },
	{ label: 'Palladium', value: 'palladium' },
	{ label: 'Polonium', value: 'polonium' },
	{ label: 'Rhodium', value: 'rhodium' },
	{ label: 'Yttrium', value: 'yttrium' },
	{ label: 'Uranium', value: 'uranium' },
];

describe('<TextInput />', () => {
	it('Should be able to render', () => {
		render(<TagsInput options={tags} />);
	});

	it('Should set the correct className', () => {
		const { container } = render(<TagsInput options={tags} className={customClass} />);

		expect(container.firstChild).toHaveClass(customClass);
	});

	it('Should pass on the id', () => {
		const id = 'test';

		const { container } = render(<TagsInput options={tags} id={id} />);

		expect(container.firstChild).toHaveAttribute('id', id);
	});

	it('Should be able to set the disabled state', () => {
		const { container } = render(<TagsInput options={tags} disabled={true} />);

		expect(container.querySelector('.c-tags-input--is-disabled')).toBeInTheDocument();
	});

	it('Should be able to set an initial value', () => {
		const values = [
			{ label: 'Potassium', value: 'potassium' },
			{ label: 'Vanadium', value: 'vanadium' },
		];

		const { container } = render(<TagsInput options={tags} value={values} />);

		const selectedTagLabels = container.querySelectorAll('.c-tags-input__multi-value__label');

		expect(selectedTagLabels[0]).toHaveTextContent(values[0].label);
		expect(selectedTagLabels[1]).toHaveTextContent(values[1].label);
	});

	it('Should call the onChange handler when the input changes', () => {
		const onChangeHandler = jest.fn();

		const { container, rerender } = render(
			<TagsInput options={tags} onChange={onChangeHandler} />
		);

		// https://stackoverflow.com/questions/41991077/testing-react-select-component
		const tagsInputControl = container.querySelector('.c-tags-input__control') as HTMLElement;
		fireEvent.keyDown(tagsInputControl, { key: 'ArrowDown', keyCode: 40 });
		fireEvent.keyDown(tagsInputControl, { key: 'Enter', keyCode: 13 });

		expect(onChangeHandler).toHaveBeenCalled();
		expect(onChangeHandler).toHaveBeenCalledTimes(1);
		expect(onChangeHandler).toHaveBeenCalledWith([tags[0]]);

		// TagsInput is controlled: feed the selection back in like a parent would
		rerender(<TagsInput options={tags} value={[tags[0]]} onChange={onChangeHandler} />);

		fireEvent.keyDown(tagsInputControl, { key: 'ArrowDown', keyCode: 40 });
		fireEvent.keyDown(tagsInputControl, { key: 'ArrowDown', keyCode: 40 });
		fireEvent.keyDown(tagsInputControl, { key: 'Enter', keyCode: 13 });

		expect(onChangeHandler).toHaveBeenCalledTimes(2);
		// Selected items are not shown in dropdown
		expect(onChangeHandler).toHaveBeenCalledWith([tags[0], tags[2]]);
	});
});
