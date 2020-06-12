import { ButtonTypeSchema } from '../../components/Button/Button.types';
import { action } from '../../helpers';

import { BlockMediaListProps, MediaListItem } from './BlockMediaList';

export const MEDIA_LIST_MOCK: MediaListItem[] = [
	{
		category: 'collection',
		metadata: [{ icon: 'eye', label: '1005' }, { label: '10/10/2020' }],
		buttonLabel: 'meer lezen',
		buttonIcon: 'eye',
		buttonType: 'danger',
		buttonAction: {
			type: 'INTERNAL_LINK',
			value: '/collecties/1',
		},
		title: 'Collectie 1',
		thumbnail: { label: 'Collectie', meta: '3 items' },
	},
	{
		category: 'audio',
		metadata: [{ label: '02/02/2020' }],
		title: 'Audio fragment 1',
		buttonLabel: 'meer lezen',
		buttonIcon: 'eye',
		buttonType: 'danger',
		buttonAction: {
			type: 'INTERNAL_LINK',
			value: '/items/1',
		},
		thumbnail: { label: 'audio', meta: '5 items', src: '/images/500x200.svg' },
	},
	{
		category: 'collection',
		metadata: [{ label: '02/02/2020' }],
		title: 'Collectie 2',
		buttonLabel: 'meer lezen',
		buttonIcon: 'eye',
		buttonType: 'secondary',
		buttonAction: {
			type: 'INTERNAL_LINK',
			value: '/collecties/2',
		},
		thumbnail: { label: 'Collectie', meta: '7 items', src: '/images/500x200.svg' },
	},
	{
		category: 'collection',
		metadata: [{ icon: 'eye', label: '25' }, { label: '02/02/2020' }],
		title: 'Collectie 3',
		buttonAction: {
			type: 'INTERNAL_LINK',
			value: '/collecties/3',
		},
		thumbnail: { label: 'Collectie', meta: '5 items', src: '/images/500x200.svg' },
	},
	{
		category: 'video',
		metadata: [{ icon: 'eye', label: '195' }, { label: '02/02/2020' }],
		title: 'Video fragment 1',
		buttonAction: {
			type: 'INTERNAL_LINK',
			value: '/items/2',
		},
		thumbnail: { label: 'Video' },
	},
	{
		category: 'video',
		metadata: [{ label: '02/02/2020' }],
		title: 'Video fragment 2',
		buttonLabel: 'meer lezen',
		buttonIcon: 'eye',
		buttonType: 'danger',
		buttonAction: {
			type: 'INTERNAL_LINK',
			value: '/items/3',
		},
		thumbnail: { label: 'Video', src: '/images/500x200.svg' },
	},
	{
		category: 'audio',
		metadata: [{ icon: 'eye', label: '347' }, { label: '02/02/2020' }],
		title: 'Audio fragment 2',
		buttonLabel: 'meer lezen',
		buttonIcon: 'eye',
		buttonType: 'danger',
		buttonAction: {
			type: 'INTERNAL_LINK',
			value: '/items/4',
		},
		thumbnail: { label: 'Audio' },
	},
	{
		category: 'collection',
		metadata: [{ label: '02/02/2020' }],
		title: 'Collectie 4',
		buttonLabel: 'meer lezen',
		buttonIcon: 'eye',
		buttonType: 'danger',
		buttonAction: {
			type: 'INTERNAL_LINK',
			value: '/collecties/4',
		},
		thumbnail: { label: 'Collectie', meta: '2 items', src: '/images/500x200.svg' },
	},
];

export const MEDIA_LIST_TITLE_MOCK: BlockMediaListProps = {
	title: 'Collecties secundair onderwijs',
	elements: MEDIA_LIST_MOCK,
	navigate: action('navigate to: '),
};

export const MEDIA_LIST_TITLE_BUTTON_MOCK: BlockMediaListProps = {
	...MEDIA_LIST_TITLE_MOCK,
	buttonLabel: 'Bekijk het volledige aanbod',
	buttonAction: {
		type: 'INTERNAL_LINK',
		value: '/zoeken?filters....',
	},
};

export const MEDIA_LIST_CTA_MOCK: BlockMediaListProps = {
	ctaTitle: 'Call to action',
	ctaContent: 'Wil je meer weten?',
	ctaButtonLabel: 'Ontdek meer',
	ctaButtonIcon: 'delete',
	elements: MEDIA_LIST_MOCK.slice(0, -1),
	ctaButtonAction: {
		type: 'EXTERNAL_LINK',
		value: 'http://google.com',
	},
	navigate: action('navigate to: '),
};

export const MEDIA_LIST_CTA_MOCK_WITHOUT_BUTTONS: BlockMediaListProps = {
	ctaTitle: 'Call to action',
	ctaContent: 'Wil je meer weten?',
	ctaButtonLabel: 'Ontdek meer',
	ctaButtonIcon: 'delete',
	elements: MEDIA_LIST_MOCK.slice(0, -1).map(mock => {
		const { buttonLabel, buttonIcon, buttonType, ...rest } = mock;
		return rest;
	}),
	ctaButtonAction: {
		type: 'EXTERNAL_LINK',
		value: 'http://google.com',
	},
	navigate: action('navigate to: '),
};

export const MEDIA_LIST_COLORED_CTA_MOCK: BlockMediaListProps = {
	...MEDIA_LIST_CTA_MOCK,
	ctaTitleColor: '#FF0000',
	ctaContentColor: '#00FF00',
	ctaButtonType: 'danger' as ButtonTypeSchema,
	ctaBackgroundColor: '#0000FF',
};

export const MEDIA_LIST_IMAGE_CTA_MOCK: BlockMediaListProps = {
	...MEDIA_LIST_COLORED_CTA_MOCK,
	ctaBackgroundImage: '/images/thumbnail.jpg',
};
