import { action } from 'storybook/actions';
import { storiesOf } from '@storybook/react';
import { loremIpsum } from 'lorem-ipsum';
import { cloneElement, type ReactElement, useState } from 'react';

import { Button } from '../Button/Button.js';
import { ButtonGroup } from '../ButtonGroup/ButtonGroup.js';
import { ButtonToolbar } from '../ButtonToolbar/ButtonToolbar.js';
import { Form } from '../Form/Form.js';
import { FormGroup } from '../Form/FormGroup/FormGroup.js';
import { IconNameSchema } from '../Icon/Icon.types.js';
import { TextArea } from '../TextArea/TextArea.js';
import { TextInput } from '../TextInput/TextInput.js';

import { Accordion } from './Accordion.js';
import { AccordionActions, AccordionBody, AccordionTitle } from './Accordion.slots.js';

const AccordionStoryComponent = ({ children }: { children: ReactElement }) => {
	const [isOpen, setIsOpen] = useState(false);

	return cloneElement(children, {
		isOpen,
		onToggle: () => setIsOpen(!isOpen),
	});
};

const AccordionWithSlots = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<Accordion isOpen={isOpen} title="Accordion title" onToggle={() => setIsOpen(!isOpen)}>
			<AccordionTitle>Accordion title slot</AccordionTitle>
			<AccordionActions>
				<ButtonToolbar>
					<ButtonGroup>
						<Button
							icon={IconNameSchema.chevronDown}
							type="tertiary"
							onClick={action('move down button clicked')}
						/>
						<Button
							icon={IconNameSchema.chevronUp}
							type="tertiary"
							onClick={action('move up button clicked')}
						/>
					</ButtonGroup>
					<Button
						icon={IconNameSchema.delete}
						type="tertiary"
						onClick={action('delete button clicked')}
					/>
				</ButtonToolbar>
			</AccordionActions>
			<AccordionBody>
				<Form>
					<FormGroup label="Titel">
						<TextInput />
					</FormGroup>
					<FormGroup label="Body">
						<TextArea />
					</FormGroup>
				</Form>
			</AccordionBody>
		</Accordion>
	);
};

storiesOf('components/Accordion', module)
	.addParameters({ jest: ['Accordion'] })
	.add('Accordion', () => (
		<AccordionStoryComponent>
			<Accordion title="Accordion title">
				<div className="c-content">
					<p>{loremIpsum({ count: 10 })}</p>
				</div>
			</Accordion>
		</AccordionStoryComponent>
	))
	.add('Accordion with slots', () => <AccordionWithSlots />)
	.add('Accordion toggle self', () => (
		<Accordion title="Accordion title">
			<div className="c-content">
				<p>{loremIpsum({ count: 10 })}</p>
			</div>
		</Accordion>
	))
	.add('Accordion dark container', () => (
		<div
			className="u-color-white"
			style={{
				backgroundColor: '#2B414F',
				padding: '20px',
			}}
		>
			<Accordion title="Accordion title">
				<div className="c-content">
					<p>{loremIpsum({ count: 10 })}</p>
				</div>
			</Accordion>
		</div>
	));
