import thumbnail from '../../../static/images/thumbnail.jpg';
import { Box } from '../Box/Box.js';
import { Icon } from '../Icon/Icon.js';
import { IconNameSchema } from '../Icon/Icon.types.js';

import { Avatar } from './Avatar.js';

export default {
	title: 'components/Avatar',

	parameters: {
		jest: ['Avatar', 'AvatarIcon'],
	},
};

export const _Avatar = () => <Avatar initials="JD" />;
export const SmallAvatar = () => <Avatar initials="JD" size="small" />;

SmallAvatar.story = {
	name: 'Small avatar',
};

export const AvatarWithImage = () => (
	<>
		<Avatar initials="JD" image={thumbnail} />
	</>
);

AvatarWithImage.story = {
	name: 'Avatar with image',
};

export const AvatarWithName = () => (
	<>
		<Box backgroundColor="dark">
			<Avatar initials="JD" name="John Doe" />
		</Box>
		<Box backgroundColor="gray">
			<Avatar initials="JD" name="John Doe" dark />
		</Box>
	</>
);

AvatarWithName.story = {
	name: 'Avatar with name',
};

export const AvatarWithNameAndTitle = () => (
	<>
		<Box backgroundColor="dark">
			<Avatar initials="JD" name="John Doe" title="Quality Assurance Tester" />
		</Box>
		<Box backgroundColor="gray">
			<Avatar initials="JD" name="John Doe" title="Quality Assurance Tester" dark />
		</Box>
	</>
);

AvatarWithNameAndTitle.story = {
	name: 'Avatar with name and title',
};

export const LargeAvatar = () => <Avatar icon={IconNameSchema.user} size="large" />;

LargeAvatar.story = {
	name: 'Large avatar',
};

export const AavatarDropdown = () => (
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
);

AavatarDropdown.story = {
	name: 'Aavatar dropdown',
};
