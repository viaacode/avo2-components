import { storiesOf } from '@storybook/react';
import React, { FunctionComponent, useState } from 'react';

import { Accordion, AccordionProps } from './Accordion';

const ControlledAccordion: FunctionComponent<AccordionProps> = ({ isOpen, ...rest }) => {
	const [open, setOpen] = useState<boolean>(isOpen);

	return <Accordion {...rest} isOpen={open} onToggle={() => setOpen(!open)} />;
};

storiesOf('Accordion', module)
	.addParameters({ jest: ['Accordion'] })
	.add('Accordion', () => (
		<ControlledAccordion isOpen title="Acordion title">
			<div className="c-content">
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi ipsa laborum nihil
					voluptate consequuntur cumque id illo, numquam sint, aperiam tempore. Unde illo sunt earum
					fugit sit error quasi porro.
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi ipsa laborum nihil
					voluptate consequuntur cumque id illo, numquam sint, aperiam tempore. Unde illo sunt earum
					fugit sit error quasi porro.
				</p>
			</div>
		</ControlledAccordion>
	));