import { storiesOf } from '@storybook/react';
import React from 'react';

import { Tooltip } from './Tooltip';
import { TooltipContent, TooltipTrigger } from './Tooltip.slots';

const TooltipStory = ({ children }: { children: React.ReactNode }) => (
	<div className="u-text-center">{children}</div>
);

storiesOf('Tooltip', module)
	.addParameters({ jest: ['Tooltip'] })
	.add('Tooltip top', () => (
		<TooltipStory>
			<Tooltip placement="top">
				<TooltipTrigger>
					<span>Hover me!</span>
				</TooltipTrigger>
				<TooltipContent>
					<span>This is a tooltip</span>
				</TooltipContent>
			</Tooltip>
		</TooltipStory>
	))
	.add('Tooltip right', () => (
		<TooltipStory>
			<Tooltip placement="right">
				<TooltipTrigger>
					<span>Hover me!</span>
				</TooltipTrigger>
				<TooltipContent>
					<span>This is a tooltip</span>
				</TooltipContent>
			</Tooltip>
		</TooltipStory>
	))
	.add('Tooltip bottom', () => (
		<TooltipStory>
			<Tooltip placement="bottom">
				<TooltipTrigger>
					<span>Hover me!</span>
				</TooltipTrigger>
				<TooltipContent>
					<span>This is a tooltip</span>
				</TooltipContent>
			</Tooltip>
		</TooltipStory>
	))
	.add('Tooltip left', () => (
		<TooltipStory>
			<Tooltip placement="left">
				<TooltipTrigger>
					<span>Hover me!</span>
				</TooltipTrigger>
				<TooltipContent>
					<span>This is a tooltip</span>
				</TooltipContent>
			</Tooltip>
		</TooltipStory>
	));
