import { action } from '@storybook/addon-actions';
import { Avo } from '@viaa/avo2-types';

export const MOCK_HEADER_PROPS = {
	title: 'De wasberen slaan op hol in Pairi Daiza.',
	showMetaData: false,
};
export const MOCK_HEADER_PROPS_FULL = {
	...MOCK_HEADER_PROPS,
	category: 'collection' as Avo.ContentType.English,
	onClickTitle: action('Title clicked'),
	showMetaData: true,
	bookmarks: '12',
	views: '23',
};
