import { storiesOf } from '@storybook/react';
import React, { cloneElement, ReactElement, useState } from 'react';

import { Button } from '../Button/Button';
import { Form } from '../Form/Form';
import { FormGroup } from '../Form/FormGroup/FormGroup';
import { TextArea } from '../TextArea/TextArea';
import { TextInput } from '../TextInput/TextInput';
import { Accordeon } from './Accordeon';
import { AccordeonActions, AccordeonBody, AccordeonTitle } from './Accordeon.slots';

const AccordeonStoryComponent = ({ children }: { children: ReactElement }) => {
	const [isOpen, setIsOpen] = useState(false);

	return cloneElement(children, {
		isOpen,
		onToggle: () => setIsOpen(!isOpen),
	});
};

const AccordeonWithSlots = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<Accordeon isOpen={isOpen} title="Acordion title">
			<AccordeonTitle>Accordeon title slot</AccordeonTitle>
			<AccordeonActions>
				<Button
					className="u-spacer-right-s"
					icon="edit"
					onClick={() => setIsOpen(!isOpen)}
					type="tertiary"
				/>
				<Button icon="delete" type="tertiary" />
			</AccordeonActions>
			<AccordeonBody>
				<Form>
					<FormGroup label="Titel">
						<TextInput />
					</FormGroup>
					<FormGroup label="Body">
						<TextArea />
					</FormGroup>
				</Form>
			</AccordeonBody>
		</Accordeon>
	);
};

storiesOf('Accordeon', module)
	.addParameters({ jest: ['Accordeon'] })
	.add('Accordeon', () => (
		<AccordeonStoryComponent>
			<Accordeon title="Acordion title">
				<div className="c-content">
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi ipsa laborum nihil
						voluptate consequuntur cumque id illo, numquam sint, aperiam tempore. Unde illo sunt
						earum fugit sit error quasi porro.
					</p>
				</div>
			</Accordeon>
		</AccordeonStoryComponent>
	))
	.add('Accordeon with slots', () => <AccordeonWithSlots />);
