import image1600x900 from '../../../static/images/1600x900.jpg';
import image400x300 from '../../../static/images/400x300.jpg';

import { Image } from './Image';

export default {
	title: 'components/Image',

	parameters: {
		jest: ['Image'],
	},
};

export const _Image = () => (
	<Image src={image400x300} alt="image showing the default dimensions on a grey background" />
);

export const ImageFullWidth = () => (
	<Image wide src={image1600x900} alt="image showing the default dimensions on a grey background" />
);

ImageFullWidth.story = {
	name: 'Image full width',
};
