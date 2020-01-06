import { shallow } from 'enzyme';
import React from 'react';

import { Accordeon } from './Accordeon';
import { AccordeonActions, AccordeonBody, AccordeonTitle } from './Accordeon.slots';

const customClassName = 'c-custom-accordion';

describe('<Accordeon />', () => {
	const accordion = <Accordeon className={customClassName} isOpen />;
	const wrapper = shallow(accordion);

	it('should render', () => {
		shallow(accordion);
	});

	it('Should set the correct className', () => {
		expect(wrapper.hasClass('c-accordion')).toBeTruthy();
		expect(wrapper.hasClass('c-accordion--closed')).toBeFalsy();
		expect(wrapper.hasClass(customClassName)).toBeTruthy();
	});

	it('Should render correctly with `isOpen = false`', () => {
		wrapper.setProps({ isOpen: false });

		expect(wrapper.hasClass('c-accordion--closed')).toBeTruthy();
	});

	it('Should call the `onToggle` prop when clicking the header', () => {
		const onToggleHandler = jest.fn();
		wrapper.setProps({ onToggle: onToggleHandler });

		const header = wrapper.find('.c-accordion__header');
		header.simulate('click');

		expect(header.hasClass('u-clickable')).toBeTruthy();
		expect(onToggleHandler).toHaveBeenCalled();
		expect(onToggleHandler).toHaveBeenCalledTimes(1);
	});

	it('Should render with slots', () => {
		const titleSlot = 'Title slot';
		const actionsSlot = 'Actions slot';
		const bodySlot = 'Body slot';

		const accordionWithSlots = shallow(
			<Accordeon>
				<AccordeonTitle>{titleSlot}</AccordeonTitle>
				<AccordeonActions>
					<button>{actionsSlot}</button>
				</AccordeonActions>
				<AccordeonBody>{bodySlot}</AccordeonBody>
			</Accordeon>
		);

		const titleElement = accordionWithSlots.find('.c-accordion__header-title');
		const actionsElement = accordionWithSlots.find('.c-accordion__header button');
		const bodyElement = accordionWithSlots.find('.c-accordion__body .c-accordion__item');

		expect(titleElement.text()).toBe(titleSlot);
		expect(actionsElement.text()).toBe(actionsSlot);
		expect(bodyElement.text()).toBe(bodySlot);
	});
});
