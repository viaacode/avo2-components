import { fireEvent, render, screen } from '@testing-library/react';

import { Tabs } from './Tabs';

const mockTabs = [
	{
		label: 'Videos',
		id: 'videos',
		active: true,
	},
	{
		label: 'Folder',
		id: 'folder',
	},
];

describe('<Tabs />', () => {
	it('Should be able to render', () => {
		render(<Tabs tabs={mockTabs} />);
	});

	it('Should set the correct className', () => {
		const customClass = 'c-column-custom';

		const { container } = render(<Tabs className={customClass} tabs={mockTabs} />);

		expect(container.firstChild).toHaveClass(customClass);
		expect(container.firstChild).toHaveClass('c-tabs');
	});

	it('Should set the correct className when border is passed', () => {
		const { container: container1 } = render(<Tabs tabs={mockTabs} border />);
		const { container: container2 } = render(<Tabs tabs={mockTabs} />);

		expect(container1.firstChild).toHaveClass('c-tabs__bottom-border');
		expect(container2.firstChild).not.toHaveClass('c-tabs__bottom-border');
	});

	it('Should correctly render `Tab`-components as children', () => {
		const { container } = render(<Tabs tabs={mockTabs} />);

		expect(container.querySelectorAll('.c-tab-item')).toHaveLength(2);
		expect(screen.getByText('Videos')).toBeInTheDocument();
		expect(screen.getByText('Folder')).toBeInTheDocument();
	});

	it('Should trigger onClick when clicking a tab', () => {
		const onClickHandler = jest.fn();

		render(<Tabs tabs={mockTabs} onClick={onClickHandler} />);

		fireEvent.click(screen.getByText('Videos'));

		expect(onClickHandler).toHaveBeenCalled();
		expect(onClickHandler).toHaveBeenCalledTimes(1);
		expect(onClickHandler).toHaveBeenCalledWith(mockTabs[0].id);

		fireEvent.click(screen.getByText('Folder'));

		expect(onClickHandler).toHaveBeenCalledTimes(2);
		expect(onClickHandler).toHaveBeenCalledWith(mockTabs[1].id);
	});
});
