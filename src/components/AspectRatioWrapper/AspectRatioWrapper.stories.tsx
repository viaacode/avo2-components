import { AspectRatioWrapper } from './AspectRatioWrapper';

export default {
	title: 'components/AspectRatioWrapper',

	parameters: {
		jest: ['AspectRatioWrapper', 'AspectRatioWrapperIcon'],
	},
};

export const AspectRatioWrapperPredefined = () => (
	<div style={{ width: '30%', backgroundColor: '#ddd', border: 'solid 2px black' }}>
		<AspectRatioWrapper aspect="16:9">16:9 (predefined)</AspectRatioWrapper>
	</div>
);

AspectRatioWrapperPredefined.story = {
	name: 'AspectRatioWrapper predefined',
};

export const AspectRatioWrapperNumeric = () => (
	<div style={{ width: '30%', backgroundColor: '#ddd', border: 'solid 2px black' }}>
		<AspectRatioWrapper aspect={1.333333}>4:3 (numeric)</AspectRatioWrapper>
	</div>
);

AspectRatioWrapperNumeric.story = {
	name: 'AspectRatioWrapper numeric',
};
