import React from 'react';

import { storiesOf } from '@storybook/react';

import { Spacer } from '../Spacer/Spacer';

import { AvatarList } from './AvatarList';

export const mockAvatars = [
	{
		initials: 'ES',
		name: 'Ethan Sanders',
		subtitle: 'Mag Bewerken',
		onClick: () => {},
	},
	{
		initials: 'JC',
		name: 'Jerry Cooper',
		subtitle: 'Mag Bewerken',
		onClick: () => {},
	},
	{
		initials: 'JD',
		name: 'John Doe',
		subtitle: 'Mag Bewerken',
		onClick: () => {},
	},
	{
		initials: 'EW',
		name: 'Edward Wilson',
		subtitle: 'Mag Bewerken',
		onClick: () => {},
	},
	{
		initials: 'LH',
		name: 'Lauren Hoffman',
		subtitle: 'Mag Bewerken',
		onClick: () => {},
	},
	{
		initials: 'JD',
		name: 'Jane Doe',
		subtitle: 'Mag Bewerken',
		onClick: () => {},
	},
	{
		initials: 'PJ',
		name: 'Phillip Johnston',
		subtitle: 'Mag Bewerken',
		onClick: () => {},
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
