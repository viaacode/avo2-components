import { type Avo } from '@viaa/avo2-types';

export type Language = 'en' | 'nl';

export const contentTypes: Avo.ContentType.Dict[] = [
	{
		en: 'collection',
		nl: 'collectie',
	},
	{
		en: 'item',
		nl: 'item',
	},
	{
		en: 'audio',
		nl: 'audio',
	},
	{
		en: 'video',
		nl: 'video',
	},
	{
		en: 'bundle',
		nl: 'bundel',
	},
	{
		en: 'search',
		nl: 'zoek',
	},
	{
		en: 'searchquery',
		nl: 'zoekopdracht',
	},
	{
		en: 'assignment',
		nl: 'opdracht',
	},
];

export const translateContentType = (value: string, from: Language, toEnglish: boolean): string => {
	const type = contentTypes.find((contentType) => contentType[from] === value);
	const to: Language = toEnglish ? 'en' : 'nl';

	return type ? type[to] : `${value}.${to}`;
};
