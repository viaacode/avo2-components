import { ContentPickerType } from '../../types';

import { MediaListItem } from './BlockMediaList';

export const MEDIA_LIST_MOCK: MediaListItem[] = [
	{
		category: 'collection',
		metadata: [{ icon: 'eye', label: '1005' }, { label: '10/10/2020' }],
		title: 'Collectie 1',
		thumbnail: { label: 'Collectie', meta: '3 items' },
		action: { type: 'COLLECTION', value: '1' },
	},
	{
		category: 'audio',
		metadata: [{ label: '02/02/2020' }],
		title: 'Audio fragment 1',
		thumbnail: { label: 'audio', meta: '5 items' },
		action: { type: 'ITEM', value: '1' },
	},
	{
		category: 'collection',
		metadata: [{ label: '02/02/2020' }],
		title: 'Collectie 2',
		thumbnail: { label: 'Collectie', meta: '7 items' },
		action: { type: 'COLLECTION', value: '2' },
	},
	{
		category: 'collection',
		metadata: [{ icon: 'eye', label: '25' }, { label: '02/02/2020' }],
		title: 'Collectie 3',
		thumbnail: { label: 'Collectie', meta: '5 items' },
		action: { type: 'COLLECTION', value: '3' },
	},
	{
		category: 'video',
		metadata: [{ icon: 'eye', label: '195' }, { label: '02/02/2020' }],
		title: 'Video fragment 1',
		thumbnail: { label: 'Video' },
		action: { type: 'ITEM', value: '2' },
	},
	{
		category: 'video',
		metadata: [{ label: '02/02/2020' }],
		title: 'Video fragment 2',
		thumbnail: { label: 'Video' },
		action: { type: 'ITEM', value: '3' },
	},
	{
		category: 'audio',
		metadata: [{ icon: 'eye', label: '347' }, { label: '02/02/2020' }],
		title: 'Audio fragment 2',
		thumbnail: { label: 'Audio' },
		action: { type: 'ITEM', value: '4' },
	},
	{
		category: 'collection',
		metadata: [{ label: '02/02/2020' }],
		title: 'Collectie 4',
		thumbnail: { label: 'Collectie', meta: '2 items' },
		action: { type: 'COLLECTION', value: '4' },
	},
];

export const MEDIA_LIST_CTA_MOCK = {
	ctaButtonAction: { type: 'COLLECTION' as ContentPickerType, value: '1234-5678' },
	ctaButtonLabel: 'Ontdek meer',
	ctaContent: 'Wil je meer weten?',
	ctaTitle: 'Call to action',
};
