import { storiesOf } from '@storybook/react';
import React from 'react';

import { BlockEmbedCode } from './BlockEmbedCode';

const EMBED_HTML = `<!-- Noscript content for added SEO -->
<noscript><a href="https://www.eventbrite.com/e/registratie-het-archief-voor-onderwijs-ieper-dinsdag-29092020-105636373236" rel="noopener noreferrer" target="_blank"></noscript>
<!-- You can customize this button any way you like -->
<button id="eventbrite-widget-modal-trigger-105636373236" type="button">Registeren</button>
<noscript></a>Registeren</noscript>

<script src="https://www.eventbrite.com/static/widgets/eb_widgets.js"></script>

<script type="text/javascript">
	var exampleCallback = function() {
		console.log('Order complete!');
	};

	window.EBWidgets.createWidget({
		widgetType: 'checkout',
		eventId: '105636373236',
		modal: true,
		modalTriggerElementId: 'eventbrite-widget-modal-trigger-105636373236',
		onOrderComplete: exampleCallback
	});
</script>`;

storiesOf('blocks/BlockEmbedCode', module)
	.addParameters({ jest: ['BlockEmbedCode'] })
	.add('BlockEmbedCode', () => <BlockEmbedCode embedHtml={EMBED_HTML} />);
