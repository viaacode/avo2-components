import { type PillPropsSchema, PillVariants } from './Pill';

export const MOCK_PILL: PillPropsSchema = {
	style: {},
	className: 'mock',
};

export const MOCK_PILL__ACTIVE: PillPropsSchema = {
	...MOCK_PILL,
	variants: [PillVariants.active],
};
