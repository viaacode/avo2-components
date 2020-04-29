import { action } from '../../helpers';

import { MediaListItem } from './BlockMediaList';
import { ButtonTypeSchema } from '../../components/Button/Button.types';

export const MEDIA_LIST_MOCK: MediaListItem[] = [
	{
		category: 'collection',
		metadata: [{ icon: 'eye', label: '1005' }, { label: '10/10/2020' }],
		navigate: action('Clicked Collectie 1'),
		title: 'Collectie 1',
		thumbnail: { label: 'Collectie', meta: '3 items' },
	},
	{
		category: 'audio',
		metadata: [{ label: '02/02/2020' }],
		navigate: action('Clicked Audio fragment 1'),
		title: 'Audio fragment 1',
		thumbnail: { label: 'audio', meta: '5 items', src: '/images/500x200.svg' },
	},
	{
		category: 'collection',
		metadata: [{ label: '02/02/2020' }],
		navigate: action('Clicked Collectie 2'),
		title: 'Collectie 2',
		thumbnail: { label: 'Collectie', meta: '7 items', src: '/images/500x200.svg' },
	},
	{
		category: 'collection',
		metadata: [{ icon: 'eye', label: '25' }, { label: '02/02/2020' }],
		navigate: action('Clicked Collectie 3'),
		title: 'Collectie 3',
		thumbnail: { label: 'Collectie', meta: '5 items', src: '/images/500x200.svg' },
	},
	{
		category: 'video',
		metadata: [{ icon: 'eye', label: '195' }, { label: '02/02/2020' }],
		navigate: action('Clicked Video fragment 1'),
		title: 'Video fragment 1',
		thumbnail: { label: 'Video' },
	},
	{
		category: 'video',
		metadata: [{ label: '02/02/2020' }],
		navigate: action('Clicked Video fragment 2'),
		title: 'Video fragment 2',
		thumbnail: { label: 'Video', src: '/images/500x200.svg' },
	},
	{
		category: 'audio',
		metadata: [{ icon: 'eye', label: '347' }, { label: '02/02/2020' }],
		navigate: action('Clicked Audio fragment 2'),
		title: 'Audio fragment 2',
		thumbnail: { label: 'Audio' },
	},
	{
		category: 'collection',
		metadata: [{ label: '02/02/2020' }],
		navigate: action('Clicked Collectie 4'),
		title: 'Collectie 4',
		thumbnail: { label: 'Collectie', meta: '2 items', src: '/images/500x200.svg' },
	},
];

export const MEDIA_LIST_CTA_MOCK = {
	ctaTitle: 'Call to action',
	ctaContent: 'Wil je meer weten?',
	ctaButtonLabel: 'Ontdek meer',
	elements: MEDIA_LIST_MOCK.slice(0, -1),
	ctaNavigate: action('Clicked cta button'),
};

export const MEDIA_LIST_COLORED_CTA_MOCK = {
	...MEDIA_LIST_CTA_MOCK,
	ctaTitleColor: '#FF0000',
	ctaContentColor: '#00FF00',
	ctaButtonType: 'danger' as ButtonTypeSchema,
	ctaBackgroundColor: '#0000FF',
};

export const MEDIA_LIST_IMAGE_CTA_MOCK = {
	...MEDIA_LIST_COLORED_CTA_MOCK,
	ctaBackgroundImage: '/images/thumbnail.jpg',
};
