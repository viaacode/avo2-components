import { action } from '@storybook/addon-actions';
import { AvoContentTypeEnglish } from '@viaa/avo2-types/dist/exports/Avo.ContentType';

export const MOCK_HEADER_PROPS = {
	title: 'De wasberen slaan op hol in Pairi Daiza.',
	showMetaData: false,
};
export const MOCK_HEADER_PROPS_FULL = {
	...MOCK_HEADER_PROPS,
	category: AvoContentTypeEnglish.COLLECTION,
	onClickTitle: action('Title clicked'),
	showMetaData: true,
	bookmarks: '12',
	views: '23',
};
