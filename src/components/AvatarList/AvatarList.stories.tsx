import React from 'react';

import { storiesOf } from '@storybook/react';

import { AvatarList } from './AvatarList';

const mockAvatars = [
	{
		initials: 'BN',
		name: 'John Doe',
		subtitle: 'Mag Bewerken',
	},
	{
		initials: 'KN',
		name: 'John Doe',
		subtitle: 'Mag Bewerken',
	},
	{
		initials: 'BC',
		name: 'John Doe',
		subtitle: 'Mag Bewerken',
	},
	{
		initials: 'AC',
		name: 'John Doe',
		subtitle: 'Mag Bewerken',
	},
	{
		initials: 'AC',
		name: 'John Doe',
		subtitle: 'Mag Bewerken',
	},
	{
		initials: 'AC',
		name: 'John Doe',
		subtitle: 'Mag Bewerken',
	},
	{
		initials: 'AC',
		name: 'John Doe',
		subtitle: 'Mag Bewerken',
	},
];

storiesOf('AvatarList', module)
	.addParameters({ jest: ['AvatarList', 'AvatarIcon'] })
	.add('AvatarList (closed dropdown)', () => <AvatarList avatars={mockAvatars} isOpen={false} />)
	.add('AvatarList (open dropdown)', () => <AvatarList avatars={mockAvatars} isOpen />);
