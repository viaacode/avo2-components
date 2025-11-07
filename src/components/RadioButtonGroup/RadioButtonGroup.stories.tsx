import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { Fragment, type ReactElement, useState } from 'react';

import { noop } from '../../helpers/noop.js';

import { RadioButtonGroup } from './RadioButtonGroup.js';
import { RADIO_BUTTON_OPTIONS } from './RadioButtonGroup.mock.js';

const RadioButtonGroupStoryComponent = ({
	children,
	defaultValue,
}: {
	children: ReactElement;
	defaultValue?: string;
}) => {
	const [value, setValue] = useState(defaultValue);

	return (
		<Fragment>
			{React.cloneElement(children, {
				value,
				onChange: (value: string) => {
					action('RadioButtonGroup value changed')(value);
					setValue(value);
				},
			})}
		</Fragment>
	);
};

storiesOf('components/RadioButtonGroup', module)
	.addParameters({ jest: ['RadioButtonGroup'] })
	.add('RadioButtonGroup', () => (
		<RadioButtonGroupStoryComponent>
			<RadioButtonGroup options={RADIO_BUTTON_OPTIONS} value={''} onChange={noop} />
		</RadioButtonGroupStoryComponent>
	))
	.add('RadioButtonGroup default option', () => (
		<RadioButtonGroupStoryComponent defaultValue="steak">
			<RadioButtonGroup options={RADIO_BUTTON_OPTIONS} value={''} onChange={noop} />
		</RadioButtonGroupStoryComponent>
	))
	.add('RadioButtonGroup inline', () => (
		<RadioButtonGroupStoryComponent>
			<RadioButtonGroup options={RADIO_BUTTON_OPTIONS} value={''} onChange={noop} inline />
		</RadioButtonGroupStoryComponent>
	));
