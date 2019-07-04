import React from 'react';

import { storiesOf } from '@storybook/react';

import { AvatarList } from './AvatarList';

const mockAvatars = [
	{ initials: 'BN' },
	{ initials: 'KN' },
	{ initials: 'BC' },
	{ initials: 'AC' },
];

storiesOf('AvatarList', module)
	.addParameters({ jest: ['AvatarList', 'AvatarIcon'] })
	.add('AvatarList', () => <AvatarList avatars={mockAvatars} />);
