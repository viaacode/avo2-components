import { render } from '@testing-library/react';

import { Button } from '../Button/Button';

import { ButtonGroup } from './ButtonGroup';

describe('<ButtonGroup />', () => {
	it('Should be able to render', () => {
		render(
			<ButtonGroup>
				<Button label="test1" />
				<Button label="test2" />
			</ButtonGroup>
		);
	});

	it('Should set the correct className', () => {
		const customClass = 'c-button-group-custom';
		const { container } = render(
			<ButtonGroup className={customClass}>
				<Button label="test1" />
				<Button label="test2" />
			</ButtonGroup>
		);

		expect(container.firstChild).toHaveClass('c-button-group');
		expect(container.firstChild).toHaveClass(customClass);
	});
});
