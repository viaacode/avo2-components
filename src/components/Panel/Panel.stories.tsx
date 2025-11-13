import { Panel } from './Panel';
import { PanelBody, PanelHeader } from './Panel.slots';

export default {
	title: 'components/Panel',

	parameters: {
		jest: ['Panel'],
	},
};

export const _Panel = () => (
	<Panel>
		<PanelHeader>
			<p>Header</p>
		</PanelHeader>
		<PanelBody>
			<p>Body</p>
		</PanelBody>
	</Panel>
);

export const _PanelHeader = () => (
	<Panel>
		<PanelHeader>
			<p>Header</p>
		</PanelHeader>
	</Panel>
);

_PanelHeader.story = {
	name: 'Panel header',
};

export const _PanelBody = () => (
	<Panel>
		<PanelBody>
			<p>Body</p>
		</PanelBody>
	</Panel>
);

_PanelBody.story = {
	name: 'Panel body',
};
