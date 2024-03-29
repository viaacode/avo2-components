import { storiesOf } from '@storybook/react';
import React from 'react';

import thumbnail from '../../../static/images/thumbnail.jpg';
import { Box } from '../Box/Box';
import { Icon } from '../Icon/Icon';
import { IconNameSchema } from '../Icon/Icon.types';

import { Avatar } from './Avatar';

storiesOf('components/Avatar', module)
	.addParameters({ jest: ['Avatar', 'AvatarIcon'] })
	.add('Avatar', () => <Avatar initials="JD" />)
	.add('Small avatar', () => <Avatar initials="JD" size="small" />)
	.add('Avatar with image', () => (
		<>
			<Avatar initials="JD" image={thumbnail} />
		</>
	))
	.add('Avatar with name', () => (
		<>
			<Box backgroundColor="dark">
				<Avatar initials="JD" name="John Doe" />
			</Box>
			<Box backgroundColor="gray">
				<Avatar initials="JD" name="John Doe" dark />
			</Box>
		</>
	))
	.add('Avatar with name and title', () => (
		<>
			<Box backgroundColor="dark">
				<Avatar initials="JD" name="John Doe" title="Quality Assurance Tester" />
			</Box>
			<Box backgroundColor="gray">
				<Avatar initials="JD" name="John Doe" title="Quality Assurance Tester" dark />
			</Box>
		</>
	))
	.add('Large avatar', () => <Avatar icon={IconNameSchema.user} size="large" />)
	.add('Aavatar dropdown', () => (
		<div
			className="c-navbar-profile-dropdown-button"
			style={{
				backgroundColor: '#283d4e',
				width: 'auto',
				display: 'flex',
				padding: '5px',
				alignItems: 'center',
			}}
		>
			<Avatar initials={'TT'} name={'Test'} />
			<Icon name={IconNameSchema.caretDown} size="small" subtle />
		</div>
	));
