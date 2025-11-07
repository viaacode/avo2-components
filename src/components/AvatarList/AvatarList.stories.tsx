import { storiesOf } from '@storybook/react';

import { noop } from '../../helpers/noop.js';
import { Spacer } from '../Spacer/Spacer.js';

import { AvatarList } from './AvatarList.js';

export const mockAvatars = [
	{
		initials: 'ES',
		name: 'Ethan Sanders',
		subtitle: 'Mag Bewerken',
		onClick: noop,
	},
	{
		initials: 'JC',
		name: 'Jerry Cooper',
		subtitle: 'Mag Bewerken',
		onClick: noop,
	},
	{
		initials: 'JD',
		name: 'John Doe',
		subtitle: 'Mag Bewerken',
		onClick: noop,
	},
	{
		initials: 'EW',
		name: 'Edward Wilson',
		subtitle: 'Mag Bewerken',
		onClick: noop,
	},
	{
		initials: 'LH',
		name: 'Lauren Hoffman',
		subtitle: 'Mag Bewerken',
		onClick: noop,
	},
	{
		initials: 'JD',
		name: 'Jane Doe',
		subtitle: 'Mag Bewerken',
		onClick: noop,
	},
	{
		initials: 'PJ',
		name: 'Phillip Johnston',
		subtitle: 'Mag Bewerken',
		onClick: noop,
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
