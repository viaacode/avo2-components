import {
	type AvoContentTypeDict,
	AvoContentTypeDutch,
	AvoContentTypeEnglish,
} from '@viaa/avo2-types';

export type Language = 'en' | 'nl';

export const contentTypes: AvoContentTypeDict[] = [
	{
		en: AvoContentTypeEnglish.COLLECTION,
		nl: AvoContentTypeDutch.COLLECTIE,
	},
	{
		en: AvoContentTypeEnglish.ITEM,
		nl: AvoContentTypeDutch.ITEM,
	},
	{
		en: AvoContentTypeEnglish.AUDIO,
		nl: AvoContentTypeDutch.AUDIO,
	},
	{
		en: AvoContentTypeEnglish.VIDEO,
		nl: AvoContentTypeDutch.VIDEO,
	},
	{
		en: AvoContentTypeEnglish.BUNDLE,
		nl: AvoContentTypeDutch.BUNDEL,
	},
	{
		en: AvoContentTypeEnglish.SEARCH,
		nl: AvoContentTypeDutch.ZOEK,
	},
	{
		en: AvoContentTypeEnglish.SEARCHQUERY,
		nl: AvoContentTypeDutch.ZOEKOPDRACHT,
	},
	{
		en: AvoContentTypeEnglish.ASSIGNMENT,
		nl: AvoContentTypeDutch.OPDRACHT,
	},
];

export const translateContentType = (value: string, from: Language, toEnglish: boolean): string => {
	const type = contentTypes.find((contentType) => contentType[from] === value);
	const to: Language = toEnglish ? 'en' : 'nl';

	return type ? type[to] : `${value}.${to}`;
};
