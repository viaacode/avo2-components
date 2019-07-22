import React from 'react';

import { storiesOf } from '@storybook/react';

import { AvatarList } from './AvatarList';

export const mockAvatars = [
	{
		initials: 'BN',
		name: 'Benjamin Naesen',
		subtitle: 'Mag Bewerken',
	},
	{
		initials: 'EE',
		name: 'Enzo Eghermanne',
		subtitle: 'Mag Bewerken',
	},
	{
		initials: 'BV',
		name: 'Bert Verhelst',
		subtitle: 'Mag Bewerken',
	},
	{
		initials: 'AC',
		name: 'Andry Charlier',
		subtitle: 'Mag Bewerken',
	},
	{
		initials: 'JD',
		name: 'John Doe',
		subtitle: 'Mag Bewerken',
	},
	{
		initials: 'JD',
		name: 'Jane Doe',
		subtitle: 'Mag Bewerken',
	},
	{
		initials: 'SH',
		name: 'Sander Houttekier',
		subtitle: 'Mag Bewerken',
	},
];

storiesOf('AvatarList', module)
	.addParameters({ jest: ['AvatarList', 'AvatarIcon'] })
	.add('AvatarList (closed dropdown)', () => <AvatarList avatars={mockAvatars} isOpen={false} />)
	.add('AvatarList (open dropdown)', () => <AvatarList avatars={mockAvatars} isOpen />);
