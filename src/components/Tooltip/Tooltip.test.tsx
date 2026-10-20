import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Tooltip } from './Tooltip';
import { TooltipContent, TooltipTrigger } from './Tooltip.slots';

// floating-ui computes positions asynchronously after mount; flush those updates inside act()
const flushFloatingUi = () => act(async () => {});

describe('Tooltip', () => {
	const contentText = 'This is a tooltip';
	const triggerText = 'Hover me!';
	const tooltipPlacement = 'bottom';

	const tooltip = (
		<Tooltip position={tooltipPlacement} id="test-tooltip-id">
			<TooltipTrigger>
				<span className="trigger">{triggerText}</span>
			</TooltipTrigger>
			<TooltipContent>
				<span className="content">{contentText}</span>
			</TooltipContent>
		</Tooltip>
	);

	it('should render', async () => {
		render(tooltip);
		await flushFloatingUi();
	});

	it('should display the tooltip trigger', async () => {
		render(tooltip);
		await flushFloatingUi();

		expect(screen.getByText(triggerText)).toBeInTheDocument();
		expect(screen.getByText(triggerText)).toHaveClass('trigger');
	});

	it('should set the correct placement className', async () => {
		const { container } = render(tooltip);
		await flushFloatingUi();

		expect(container.querySelector('.c-tooltip')).toHaveClass(`c-tooltip--${tooltipPlacement}`);
	});

	it('should show the tooltip when hovered', async () => {
		const { container } = render(tooltip);
		await flushFloatingUi();

		expect(container.querySelector('.c-tooltip')).not.toHaveClass('c-tooltip--show');

		await userEvent.hover(screen.getByText(triggerText));
		await flushFloatingUi();

		expect(container.querySelector('.c-tooltip')).toHaveClass('c-tooltip--show');
	});
});
