import { storiesOf } from '@storybook/react';
import React from 'react';

import { Tooltip } from './Tooltip';
import { TooltipContent, TooltipTrigger } from './Tooltip.slots';

storiesOf('Tooltip', module)
	.addParameters({ jest: ['Tooltip'] })
	.add('Tooltip top', () => (
		<div className="u-text-center">
			<Tooltip position="top">
				<TooltipTrigger>
					<span>Hover me!</span>
				</TooltipTrigger>
				<TooltipContent>
					<span>This is a tooltip</span>
				</TooltipContent>
			</Tooltip>
		</div>
	))
	.add('Tooltip right', () => (
		<div className="u-text-center">
			<Tooltip position="right">
				<TooltipTrigger>
					<span>Hover me!</span>
				</TooltipTrigger>
				<TooltipContent>
					<span>This is a tooltip</span>
				</TooltipContent>
			</Tooltip>
		</div>
	))
	.add('Tooltip bottom', () => (
		<div className="u-text-center">
			<Tooltip position="bottom">
				<TooltipTrigger>
					<span>Hover me!</span>
				</TooltipTrigger>
				<TooltipContent>
					<span>This is a tooltip</span>
				</TooltipContent>
			</Tooltip>
		</div>
	))
	.add('Tooltip left', () => (
		<div className="u-text-center">
			<Tooltip position="left">
				<TooltipTrigger>
					<span>Hover me!</span>
				</TooltipTrigger>
				<TooltipContent>
					<span>This is a tooltip</span>
				</TooltipContent>
			</Tooltip>
		</div>
	));
