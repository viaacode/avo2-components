import React, { Fragment, FunctionComponent } from 'react';

import classnames from 'classnames';

import { DefaultProps } from '../../types';
import { Avatar, AvatarProps } from '../Avatar/Avatar';
import { Dropdown } from '../Dropdown/Dropdown';
import { DropdownButton, DropdownContent } from '../Dropdown/Dropdown.slots';
import { Flex } from '../Flex/Flex';
import { Spacer } from '../Spacer/Spacer';
import { Tooltip } from '../Tooltip/Tooltip';
import './AvatarList.css';

interface AvatarWithSubtitle extends AvatarProps {
	subtitle?: string;
}

export interface AvatarListProps extends DefaultProps {
	avatars: AvatarWithSubtitle[];
	isOpen: boolean;
}

const twoDecimalize = (input: number): string => input.toString().padStart(2, '0');

export const AvatarList: FunctionComponent<AvatarListProps> = ({
	avatars,
	className,
	isOpen = false,
}) => {
	const visibleAvatars = avatars.slice(0, 3);
	const hiddenAvatars = avatars.slice(3, avatars.length);
	const hasHiddenAvatars = hiddenAvatars && !!hiddenAvatars.length;

	return (
		<div className={classnames(className, 'c-avatar--multiple', 'c-avatar-list-overrides')}>
			{visibleAvatars.map((avatar, index) => (
				<Fragment key={index}>
					<Avatar initials={avatar.initials} />
					<Tooltip placement="bottom" id={`index-${twoDecimalize(index)}`}>
						<h4 className="c-h4 u-m-0">{avatar.name}</h4>
						<span className="c-tooltip__meta">{avatar.subtitle}</span>
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
								<a key={index} className="c-menu__item" href="#">
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
