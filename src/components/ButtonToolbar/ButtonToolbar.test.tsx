import { render } from '@testing-library/react';

import { Button } from '../Button/Button';

import { ButtonToolbar } from './ButtonToolbar';

describe('<ButtonToolbar />', () => {
	it('Should be able to render', () => {
		render(
			<ButtonToolbar>
				<Button label="test1" />
				<Button label="test2" />
			</ButtonToolbar>
		);
	});

	it('Should set the correct className', () => {
		const customClass = 'c-button-toolbar-custom';
		const { container } = render(
			<ButtonToolbar className={customClass}>
				<Button label="test1" />
				<Button label="test2" />
			</ButtonToolbar>
		);

		expect(container.firstChild).toHaveClass('c-button-toolbar');
		expect(container.firstChild).toHaveClass(customClass);
	});
});
