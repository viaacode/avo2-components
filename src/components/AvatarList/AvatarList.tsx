import React, { Fragment, FunctionComponent } from 'react';

import { Avatar, AvatarProps } from '../Avatar/Avatar';
import { Dropdown } from '../Dropdown/Dropdown';
import { DropdownButton, DropdownContent } from '../Dropdown/Dropdown.slots';
import { Flex } from '../Flex/Flex';
import { Spacer } from '../Spacer/Spacer';
import { Tooltip } from '../Tooltip/Tooltip';
import { TooltipContent, TooltipTrigger } from '../Tooltip/Tooltip.slots';
import './AvatarList.css';

interface AvatarWithSubtitle extends AvatarProps {
	subtitle?: string;
}

export interface AvatarListProps {
	avatars: AvatarWithSubtitle[];
	isOpen: boolean;
}

export const AvatarList: FunctionComponent<AvatarListProps> = ({ avatars, isOpen = false }) => {
	const visibleAvatars = avatars.slice(0, 3);
	const hiddenAvatars = avatars.slice(3, avatars.length);
	const hasHiddenAvatars = hiddenAvatars && !!hiddenAvatars.length;

	return (
		<div className="c-avatar--multiple c-avatar-list-overrides">
			{visibleAvatars.map((avatar, index) => (
				<Fragment key={index}>
					<Tooltip position="bottom">
						<TooltipTrigger>
							<Avatar initials={avatar.initials} />
						</TooltipTrigger>
						<TooltipContent>
							<Fragment>
								<h4 className="c-h4 u-m-0">{avatar.name}</h4>
								<span className="c-tooltip__meta">{avatar.subtitle}</span>
							</Fragment>
						</TooltipContent>
					</Tooltip>
				</Fragment>
			))}
			{hasHiddenAvatars && (
				<Dropdown autoSize label="Show options" placement="bottom-start" isOpen={isOpen}>
					<DropdownButton>
						<button className="c-avatar c-avatar-dropdown" data-dropdown="multipleAvatarsDropdown">
							+{hiddenAvatars.length}
						</button>
					</DropdownButton>
					<DropdownContent>
						<Fragment>
							{hiddenAvatars.map((avatar, index) => (
								<a key={index} className="c-menu__item" href="#anchor">
									<div className="c-menu__label">
										<Flex orientation="vertical" center>
											<Avatar initials={avatar.initials} image={avatar.image} />
											<Spacer margin="left-small">
												<h4 className="c-h4 u-m-0">{avatar.name}</h4>
												{avatar.subtitle && (
													<span className="c-avatar-meta">{avatar.subtitle}</span>
												)}
											</Spacer>
										</Flex>
									</div>
								</a>
							))}
						</Fragment>
					</DropdownContent>
				</Dropdown>
			)}
		</div>
	);
};
