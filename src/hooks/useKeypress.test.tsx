import { fireEvent, render } from '@testing-library/react';

import { useKeyPress } from './useKeyPress';

const TestComponent = ({
	onPressDown,
	onPressUp,
}: {
	onPressDown?: () => void;
	onPressUp?: () => void;
}) => {
	useKeyPress('g', onPressDown, onPressUp);

	return null;
};

describe('useKeyPress', () => {
	it('Should call onPressDown when pressing target key', () => {
		const onPressDownHandler = jest.fn();

		render(<TestComponent onPressDown={onPressDownHandler} />);

		fireEvent.keyDown(window, { key: 'g' });

		expect(onPressDownHandler).toHaveBeenCalled();
		expect(onPressDownHandler).toHaveBeenCalledTimes(1);

		fireEvent.keyDown(window, { key: 'g' });

		expect(onPressDownHandler).toHaveBeenCalledTimes(2);
	});

	it('Should call onPressUp when releasing target key', () => {
		const onPressUpHandler = jest.fn();

		render(<TestComponent onPressUp={onPressUpHandler} />);

		fireEvent.keyUp(window, { key: 'g' });

		expect(onPressUpHandler).toHaveBeenCalled();
		expect(onPressUpHandler).toHaveBeenCalledTimes(1);

		fireEvent.keyUp(window, { key: 'g' });

		expect(onPressUpHandler).toHaveBeenCalledTimes(2);
	});

	it('Should not call onPressDown when pressing a key that is not the target key', () => {
		const onPressDownHandler = jest.fn();

		render(<TestComponent onPressDown={onPressDownHandler} />);

		fireEvent.keyDown(window, { key: 'a' });

		expect(onPressDownHandler).toHaveBeenCalledTimes(0);
	});

	it('Should not call onPressUp when releasing a key that is not the target key', () => {
		const onPressUpHandler = jest.fn();

		render(<TestComponent onPressUp={onPressUpHandler} />);

		fireEvent.keyUp(window, { key: 'a' });

		expect(onPressUpHandler).toHaveBeenCalledTimes(0);
	});
});
