import { storiesOf } from '@storybook/react';
import React from 'react';

import { Spacer } from '../Spacer/Spacer';

import { AvatarList } from './AvatarList';

export const mockAvatars = [
	{
		initials: 'ES',
		name: 'Ethan Sanders',
		subtitle: 'Mag Bewerken',
		onClick: (): void => {
			// noop
		},
	},
	{
		initials: 'JC',
		name: 'Jerry Cooper',
		subtitle: 'Mag Bewerken',
		onClick: (): void => {
			// noop
		},
	},
	{
		initials: 'JD',
		name: 'John Doe',
		subtitle: 'Mag Bewerken',
		onClick: (): void => {
			// noop
		},
	},
	{
		initials: 'EW',
		name: 'Edward Wilson',
		subtitle: 'Mag Bewerken',
		onClick: (): void => {
			// noop
		},
	},
	{
		initials: 'LH',
		name: 'Lauren Hoffman',
		subtitle: 'Mag Bewerken',
		onClick: (): void => {
			// noop
		},
	},
	{
		initials: 'JD',
		name: 'Jane Doe',
		subtitle: 'Mag Bewerken',
		onClick: (): void => {
			// noop
		},
	},
	{
		initials: 'PJ',
		name: 'Phillip Johnston',
		subtitle: 'Mag Bewerken',
		onClick: (): void => {
			// noop
		},
	},
];

storiesOf('components/AvatarList', module)
	.addParameters({ jest: ['AvatarList', 'AvatarIcon'] })
	.add('AvatarList (closed dropdown)', () => <AvatarList avatars={mockAvatars} isOpen={false} />)
	.add('AvatarList (open dropdown)', () => <AvatarList avatars={mockAvatars} isOpen />)
	.add('AvatarLists', () => (
		<>
			<Spacer margin="bottom">
				<AvatarList avatars={mockAvatars} isOpen={false} />
			</Spacer>
			<AvatarList avatars={mockAvatars} isOpen />
		</>
	));
