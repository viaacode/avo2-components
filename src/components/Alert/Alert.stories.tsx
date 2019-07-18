import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';
import {
	AlertProviderProps,
	positions,
	Provider as AlertProvider,
	transitions,
	useAlert,
} from 'react-alert';

import { Button } from '../Button/Button';
import { Alert } from './Alert';

const alertOptions: Partial<AlertProviderProps> = {
	position: positions.BOTTOM_LEFT,
	timeout: 7000,
	offset: '1.2rem',
	transition: transitions.FADE,
};

const alert = useAlert();

storiesOf('Alert', module)
	.addParameters({ jest: ['Alert'] })
	.add('Alerts', () => (
		<Fragment>
			{/*<AlertProvider template={Alert as any} {...alertOptions}>*/}
			{/*<Button*/}
			{/*label="Show info alert"*/}
			{/*onClick={() => {*/}
			{/*alert.show('test alert', { type: 'info' });*/}
			{/*}}*/}
			{/*/>*/}
			{/*</AlertProvider>*/}
		</Fragment>
	));
