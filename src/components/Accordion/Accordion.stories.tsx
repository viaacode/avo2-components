import type { Meta, StoryFn } from '@storybook/react';
import { loremIpsum } from 'lorem-ipsum';
import { cloneElement, type ReactElement, useState } from 'react';
import { action } from 'storybook/actions';
import { Button } from '../Button/Button';
import { ButtonGroup } from '../ButtonGroup/ButtonGroup';
import { ButtonToolbar } from '../ButtonToolbar/ButtonToolbar';
import { Form } from '../Form/Form';
import { FormGroup } from '../Form/FormGroup/FormGroup';
import { IconNameSchema } from '../Icon/Icon.types';
import { TextArea } from '../TextArea/TextArea';
import { TextInput } from '../TextInput/TextInput';
import { Accordion } from './Accordion';
import { AccordionActions, AccordionBody, AccordionTitle } from './Accordion.slots';

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

export default {
	title: 'components/Accordion',
	parameters: {
		jest: ['Accordion'],
	},
} as Meta;

export const AccordionStory: StoryFn = () => (
	<AccordionStoryComponent>
		<Accordion title="Accordion title">
			<div className="c-content">
				<p>{loremIpsum({ count: 10 })}</p>
			</div>
		</Accordion>
	</AccordionStoryComponent>
);

export const AccordionWithSlotsStory: StoryFn = () => <AccordionWithSlots />;

export const AccordionToggleSelfStory: StoryFn = () => (
	<Accordion title="Accordion title">
		<div className="c-content">
			<p>{loremIpsum({ count: 10 })}</p>
		</div>
	</Accordion>
);

export const AccordionDarkContainerStory: StoryFn = () => (
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
);
