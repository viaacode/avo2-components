import React from 'react';

import { storiesOf } from '@storybook/react';

import { AvatarList } from './AvatarList';

const mockAvatars = [
	{
		initials: 'BN',
		name: 'Benjamin Naesen',
		subtitle: 'Mag Bewerken',
	},
	{
		initials: 'KN',
		name: 'Benjamin Naesen',
		subtitle: 'Mag Bewerken',
	},
	{
		initials: 'BC',
		name: 'Benjamin Naesen',
		subtitle: 'Mag Bewerken',
	},
	{
		initials: 'AC',
		name: 'Benjamin Naesen',
		subtitle: 'Mag Bewerken',
	},
	{
		initials: 'AC',
		name: 'Benjamin Naesen',
		subtitle: 'Mag Bewerken',
	},
	{
		initials: 'AC',
		name: 'Benjamin Naesen',
		subtitle: 'Mag Bewerken',
	},
	{
		initials: 'AC',
		name: 'Benjamin Naesen',
		subtitle: 'Mag Bewerken',
	},
];

storiesOf('AvatarList', module)
	.addParameters({ jest: ['AvatarList', 'AvatarIcon'] })
	.add('AvatarList (closed dropdown)', () => <AvatarList avatars={mockAvatars} isOpen={false} />)
	.add('AvatarList (open dropdown)', () => <AvatarList avatars={mockAvatars} isOpen />);
