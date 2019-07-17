import { mount, shallow } from 'enzyme';
import React from 'react';

import { AvatarList } from './AvatarList';
import { mockAvatars } from './AvatarList.stories';

describe('AvatarList', () => {
	const avatarList = <AvatarList avatars={mockAvatars} isOpen={false} />;
	const wrapper = mount(avatarList);

	it('should render', () => {
		shallow(avatarList);
	});

	it('should only show 3 visible avatars if more are given', () => {
		const visibleAvatars = wrapper.find('.c-tooltip');

		expect(visibleAvatars).toHaveLength(3);
	});

	it('should show a button with the amount of hidden avatars if more than 3 are given', () => {
		expect(wrapper.find('.c-avatar-dropdown')).toHaveLength(1);
		expect(wrapper.find('.c-avatar-dropdown').text()).toEqual('+4');
	});

	it('should show the hidden avatars when isOpen prop equals true', () => {
		const menuElement = wrapper.find('.c-menu');

		wrapper.setProps({ isOpen: true });
		expect(menuElement.hasClass('c-menu--visible'));
		expect(menuElement.find('.c-avatar')).toHaveLength(4);
	});
});
