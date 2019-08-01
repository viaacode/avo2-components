import { storiesOf } from '@storybook/react';
import React from 'react';

import { Tooltip } from './Tooltip';
import { TooltipContent, TooltipTrigger } from './Tooltip.slots';

storiesOf('Tooltip', module)
	.addParameters({ jest: ['Tooltip'] })
	.add('Tooltip top', () => (
		<div className="u-text-center">
			<Tooltip position="top" contentClassName="u-spacer-bottom-s">
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
			<Tooltip position="right" contentClassName="u-spacer-left-s">
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
			<Tooltip position="bottom" contentClassName="u-spacer-top-s">
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
			<Tooltip position="left" contentClassName="u-spacer-right-s">
				<TooltipTrigger>
					<span>Hover me!</span>
				</TooltipTrigger>
				<TooltipContent>
					<span>This is a tooltip</span>
				</TooltipContent>
			</Tooltip>
		</div>
	));
