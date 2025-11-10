import { Avo } from '@viaa/avo2-types';

export type Language = 'en' | 'nl';

export const contentTypes: Avo.ContentType.Dict[] = [
	{
		en: Avo.ContentType.English.COLLECTION,
		nl: Avo.ContentType.Dutch.COLLECTIE,
	},
	{
		en: Avo.ContentType.English.ITEM,
		nl: Avo.ContentType.Dutch.ITEM,
	},
	{
		en: Avo.ContentType.English.AUDIO,
		nl: Avo.ContentType.Dutch.AUDIO,
	},
	{
		en: Avo.ContentType.English.VIDEO,
		nl: Avo.ContentType.Dutch.VIDEO,
	},
	{
		en: Avo.ContentType.English.BUNDLE,
		nl: Avo.ContentType.Dutch.BUNDEL,
	},
	{
		en: Avo.ContentType.English.SEARCH,
		nl: Avo.ContentType.Dutch.ZOEK,
	},
	{
		en: Avo.ContentType.English.SEARCHQUERY,
		nl: Avo.ContentType.Dutch.ZOEKOPDRACHT,
	},
	{
		en: Avo.ContentType.English.ASSIGNMENT,
		nl: Avo.ContentType.Dutch.OPDRACHT,
	},
];

export const translateContentType = (value: string, from: Language, toEnglish: boolean): string => {
	const type = contentTypes.find((contentType) => contentType[from] === value);
	const to: Language = toEnglish ? 'en' : 'nl';

	return type ? type[to] : `${value}.${to}`;
};
