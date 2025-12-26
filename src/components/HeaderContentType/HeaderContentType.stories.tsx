import { AvoContentTypeEnglish } from '@viaa/avo2-types';
import { HeaderContentType } from './HeaderContentType';

export default {
	title: 'components/HeaderContentType',

	parameters: {
		jest: ['HeaderContentType'],
	},
};

export const HeaderContentTypes = () => (
	<HeaderContentType category={AvoContentTypeEnglish.COLLECTION} label="collectie" />
);

HeaderContentTypes.story = {
	name: 'HeaderContentTypes',
};
