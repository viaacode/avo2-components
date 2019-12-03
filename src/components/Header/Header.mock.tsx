import { EnglishContentType } from '../../types';

export const MOCK_HEADER_PROPS = {
	title: 'De wasberen slaan op hol in Pairi Daiza.',
	onClickTitle: () => null,
	showMetaData: false,
};
export const MOCK_HEADER_PROPS_FULL = {
	...MOCK_HEADER_PROPS,
	category: 'collection' as EnglishContentType,
	showMetaData: true,
	bookmarks: '12',
	views: '23',
};
