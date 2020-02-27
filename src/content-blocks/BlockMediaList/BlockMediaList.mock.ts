import { MediaListItem } from './BlockMediaList';

export const MEDIA_LIST_MOCK: MediaListItem[] = [
	{
		category: 'collection',
		metadata: [{ icon: 'eye', label: '1005' }, { label: '10/10/2020' }],
		title: 'Collectie 1',
		thumbnail: { label: 'Collectie', meta: '3 items' },
	},
	{
		category: 'audio',
		metadata: [{ label: '02/02/2020' }],
		title: 'Audio fragment 1',
		thumbnail: { label: 'audio', meta: '5 items', src: '/images/500x200.svg' },
	},
	{
		category: 'collection',
		metadata: [{ label: '02/02/2020' }],
		title: 'Collectie 2',
		thumbnail: { label: 'Collectie', meta: '7 items', src: '/images/500x200.svg' },
	},
	{
		category: 'collection',
		metadata: [{ icon: 'eye', label: '25' }, { label: '02/02/2020' }],
		title: 'Collectie 3',
		thumbnail: { label: 'Collectie', meta: '5 items', src: '/images/500x200.svg' },
	},
	{
		category: 'video',
		metadata: [{ icon: 'eye', label: '195' }, { label: '02/02/2020' }],
		title: 'Video fragment 1',
		thumbnail: { label: 'Video' },
	},
	{
		category: 'video',
		metadata: [{ label: '02/02/2020' }],
		title: 'Video fragment 2',
		thumbnail: { label: 'Video', src: '/images/500x200.svg' },
	},
	{
		category: 'audio',
		metadata: [{ icon: 'eye', label: '347' }, { label: '02/02/2020' }],
		title: 'Audio fragment 2',
		thumbnail: { label: 'Audio' },
	},
	{
		category: 'collection',
		metadata: [{ label: '02/02/2020' }],
		title: 'Collectie 4',
		thumbnail: { label: 'Collectie', meta: '2 items', src: '/images/500x200.svg' },
	},
];

export const MEDIA_LIST_CTA_MOCK = {
	ctaButtonLabel: 'Ontdek meer',
	ctaContent: 'Wil je meer weten?',
	ctaTitle: 'Call to action',
};
