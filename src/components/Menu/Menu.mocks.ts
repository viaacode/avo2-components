import { IconNameSchema } from '../Icon/Icon.types.js';

import { MenuItemInfoSchema } from './MenuContent/MenuContent.js';
import { MenuSearchResultItemInfoSchema } from './MenuSearchResultContent/MenuSearchResultContent.js';

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
	{ label: 'WK Voetbal', id: 0, type: 'collection', key: '0-collection' },
	{ label: 'Wereldkampioenschap Voetbal 2018', id: 1, type: 'collection', key: '1-collection' },
	{ label: 'Journaal: voetbij bij jongeren', id: 2, type: 'bundle', key: '2-bundle' },
	{ label: 'Op één: voetbal', id: 3, type: 'video', key: '3-video' },
	{ label: 'Ketnet online: interview wereldbeker voetbal', id: 4, type: 'audio', key: '4-audio' },
];
