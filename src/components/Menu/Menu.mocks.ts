import { Avo } from '@viaa/avo2-types';
import { IconNameSchema } from '../Icon/Icon.types';
import type { MenuItemInfoSchema } from './MenuContent/MenuContent';
import type { MenuSearchResultItemInfoSchema } from './MenuSearchResultContent/MenuSearchResultContent';

export const menuItems = [
	{ label: 'Aluminium', id: 'aluminium', key: 'aluminium' },
	{ label: 'Cadmium', id: 'cadmium', key: 'cadmium' },
	{ label: 'Dubnium', id: 'dubnium', key: 'dubnium' },
	{ label: 'Potassium', id: 'potassium', key: 'potassium' },
];

export const menuItemsWithIcons: MenuItemInfoSchema[] = [
	{ ...menuItems[0], icon: IconNameSchema.circle },
	{ ...menuItems[1], icon: IconNameSchema.box },
	{ ...menuItems[2], icon: IconNameSchema.square },
	{ ...menuItems[3], icon: IconNameSchema.triangle },
];

export const menuItemsWithDivider = [
	[{ ...menuItems[0] }, { ...menuItems[1] }],
	[{ ...menuItems[2] }],
	[{ ...menuItems[3] }],
];

export const menuItemsWithSearch: MenuSearchResultItemInfoSchema[] = [
	{ label: 'WK Voetbal', id: 0, type: Avo.ContentType.English.COLLECTION, key: '0-collection' },
	{
		label: 'Wereldkampioenschap Voetbal 2018',
		id: 1,
		type: Avo.ContentType.English.COLLECTION,
		key: '1-collection',
	},
	{
		label: 'Journaal: voetbij bij jongeren',
		id: 2,
		type: Avo.ContentType.English.BUNDLE,
		key: '2-bundle',
	},
	{ label: 'Op één: voetbal', id: 3, type: Avo.ContentType.English.VIDEO, key: '3-video' },
	{
		label: 'Ketnet online: interview wereldbeker voetbal',
		id: 4,
		type: Avo.ContentType.English.AUDIO,
		key: '4-audio',
	},
];
