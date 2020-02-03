import { storiesOf } from '@storybook/react';
import React, { cloneElement, ReactElement, useState } from 'react';

import { Button } from '../Button/Button';
import { Form } from '../Form/Form';
import { FormGroup } from '../Form/FormGroup/FormGroup';
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
		<Accordion isOpen={isOpen} title="Acordion title">
			<AccordionTitle>Accordion title slot</AccordionTitle>
			<AccordionActions>
				<Button
					className="u-spacer-right-s"
					icon="edit"
					onClick={() => setIsOpen(!isOpen)}
					type="tertiary"
				/>
				<Button icon="delete" type="tertiary" />
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
			<Accordion title="Acordion title">
				<div className="c-content">
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi ipsa laborum nihil
						voluptate consequuntur cumque id illo, numquam sint, aperiam tempore. Unde illo sunt
						earum fugit sit error quasi porro.
					</p>
				</div>
			</Accordion>
		</AccordionStoryComponent>
	))
	.add('Accordion with slots', () => <AccordionWithSlots />);
