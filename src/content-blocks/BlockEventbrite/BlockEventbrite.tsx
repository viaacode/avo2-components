import classnames from 'classnames';
import React, { FunctionComponent, useEffect } from 'react';

import { Button, ButtonPropsSchema } from '../../components/Button/Button';
import { DefaultProps } from '../../types';

export interface BlockEventbriteProps extends DefaultProps, ButtonPropsSchema {
	eventId: string;
	className?: string;
}

const EVENTBRITE_SCRIPT_ID = 'eventbriteWidgetsScript';

export const BlockEventbrite: FunctionComponent<BlockEventbriteProps> = ({
	eventId,
	className,
	...rest
}) => {
	const elementId = `eventbrite-widget-modal-trigger-${eventId}`;

	useEffect(() => {
		const existingScript = document.getElementById(EVENTBRITE_SCRIPT_ID);
		if (!existingScript) {
			const script = document.createElement('script');
			script.src = 'https://www.eventbrite.com/static/widgets/eb_widgets.js';
			script.id = EVENTBRITE_SCRIPT_ID;
			document.body.appendChild(script);

			script.onload = () => {
				(window as any).EBWidgets.createWidget({
					eventId,
					widgetType: 'checkout',
					modal: true,
					modalTriggerElementId: elementId,
				});
			};
		}
	}, [elementId, eventId]);

	return (
		<div className={classnames(className, 'c-block-eventbrite')}>
			<Button {...rest} id={elementId} />
		</div>
	);
};
