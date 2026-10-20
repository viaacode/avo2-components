import { render } from '@testing-library/react';

import { noop } from '../../helpers/noop';

import { RadioButtonGroup } from './RadioButtonGroup';
import { RADIO_BUTTON_OPTIONS } from './RadioButtonGroup.mock';

describe('<RadioButtonGroup />', () => {
	it('Should be able to render', () => {
		render(<RadioButtonGroup options={RADIO_BUTTON_OPTIONS} value={''} onChange={noop} />);
	});

	it('Should set the correct className', () => {
		const customClass = 'c-column-custom';

		const { container } = render(
			<RadioButtonGroup
				className={customClass}
				options={RADIO_BUTTON_OPTIONS}
				value={''}
				onChange={noop}
			/>
		);

		expect(container.firstChild).toHaveClass(customClass);
		expect(container.firstChild).toHaveClass('c-radio-group');
	});

	it('Should set the correct inline className', () => {
		const { container } = render(
			<RadioButtonGroup options={RADIO_BUTTON_OPTIONS} value={''} onChange={noop} inline />
		);

		expect(container.firstChild).toHaveClass('c-radio-group--inline');
	});
});
