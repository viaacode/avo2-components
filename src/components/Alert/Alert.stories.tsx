import type { Meta, StoryFn } from '@storybook/react';
import { action } from 'storybook/actions';

import { Box } from '../Box/Box';
import { Spacer } from '../Spacer/Spacer';

import { Alert } from './Alert';
import type { AlertPropsSchema, AlertTypeSchema } from './Alert.types';

function getMultiLineAlertMessage(type: string) {
	return (
		<>
			{type} alert message
			<br />
			{type} alert message
			<br />
			{type} alert message
			<br />
		</>
	);
}

function renderAlertStories(props?: AlertPropsSchema, message?: (type: string) => JSX.Element) {
	const types: AlertTypeSchema[] = ['info', 'success', 'warn', 'danger', 'spinner'];

	return (
		<>
			{types.map((type) => (
				<Spacer key={type} margin="bottom">
					<Alert
						key={`${type}`}
						{...props}
						message={message ? message(type) : `${type} alert message`}
						type={type}
						onClose={
							type === 'info'
								? action('alert closed')
								: () => {
										// Ignore empty function
									}
						}
					/>
				</Spacer>
			))}
		</>
	);
}

const meta: Meta = {
	title: 'components/Alert',
	parameters: {
		jest: ['Alert'],
	},
};
export default meta;

export const Alerts: StoryFn = () => <Box backgroundColor="dark">{renderAlertStories()}</Box>;

export const AlertsMultiline: StoryFn = () => renderAlertStories({}, getMultiLineAlertMessage);

export const DarkAlerts: StoryFn = () => renderAlertStories({ dark: true });

export const AlertsCustomContent: StoryFn = () => (
	<Alert>
		<span>
			Info alert message <a href="#alert">with link</a>
		</span>
	</Alert>
);

export const AlertsHeading: StoryFn = () => (
	<Alert>
		<span className="c-content">
			<h4>Test heading</h4>
			Heading should not have any margin top
		</span>
	</Alert>
);
