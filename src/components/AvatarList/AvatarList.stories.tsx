import React from 'react';

import { storiesOf } from '@storybook/react';

import { AvatarList } from './AvatarList';

const mockAvatars = [
	{
		initials: 'BN',
		subtitle: 'Mag Bewerken',
	},
	{
		initials: 'KN',
		subtitle: 'Mag Bewerken',
	},
	{
		initials: 'BC',
		subtitle: 'Mag Bewerken',
	},
	{
		initials: 'AC',
		subtitle: 'Mag Bewerken',
	},
	{
		initials: 'AC',
		subtitle: 'Mag Bewerken',
	},
	{
		initials: 'AC',
		subtitle: 'Mag Bewerken',
	},
	{
		initials: 'AC',
		subtitle: 'Mag Bewerken',
	},
];

storiesOf('AvatarList', module)
	.addParameters({ jest: ['AvatarList', 'AvatarIcon'] })
	.add('AvatarList (closed dropdown)', () => <AvatarList avatars={mockAvatars} isOpen={false} />)
	.add('AvatarList (open dropdown)', () => <AvatarList avatars={mockAvatars} isOpen />);
