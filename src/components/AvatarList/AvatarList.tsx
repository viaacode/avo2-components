import clsx from 'clsx';
import { type FC, Fragment } from 'react';

import type { DefaultProps } from '../../types';
import { handleEnterOrSpace } from '../../utils';
import { Avatar, type AvatarPropsSchema } from '../Avatar/Avatar';
import { Dropdown } from '../Dropdown/Dropdown';
import { DropdownButton, DropdownContent } from '../Dropdown/Dropdown.slots';
import { Flex } from '../Flex/Flex';
import { Spacer } from '../Spacer/Spacer';
import { Tooltip } from '../Tooltip/Tooltip';
import { TooltipContent, TooltipTrigger } from '../Tooltip/Tooltip.slots';
import styles from './AvatarList.module.scss';

interface ExtendedAvatarProps extends AvatarPropsSchema {
	onClick?: (avatar: ExtendedAvatarProps) => void;
	subtitle?: string;
}

export interface AvatarListPropsSchema extends DefaultProps {
	children?: React.ReactNode;
	avatars: ExtendedAvatarProps[];
	isOpen: boolean;
}

export const AvatarList: FC<AvatarListPropsSchema> = ({ avatars, className, isOpen = false }) => {
	const visibleAvatars = avatars.slice(0, 3);
	const hiddenAvatars = avatars.slice(3, avatars.length);
	const hasHiddenAvatars = hiddenAvatars && !!hiddenAvatars.length;

	return (
		<div className={clsx(className, 'c-avatar--multiple', styles['c-avatar--multiple'])}>
			{visibleAvatars.map((avatar) => (
				<Fragment key={`${avatar.name}--${avatar.title}`}>
					<Tooltip position="bottom">
						<TooltipTrigger>
							<Avatar initials={avatar.initials} />
						</TooltipTrigger>
						<TooltipContent>
							<h4 className="c-h4 u-m-0">{avatar.name}</h4>
							<span className="c-tooltip__meta">{avatar.subtitle}</span>
						</TooltipContent>
					</Tooltip>
				</Fragment>
			))}
			{hasHiddenAvatars && (
				<Dropdown
					isOpen={isOpen}
					label="Show options"
					menuWidth="fit-content"
					placement="bottom-start"
				>
					<DropdownButton>
						<button
							className="c-avatar c-avatar-dropdown"
							data-dropdown="multipleAvatarsDropdown"
							type="button"
						>
							+{hiddenAvatars.length}
						</button>
					</DropdownButton>
					<DropdownContent>
						{hiddenAvatars.map((avatar) => (
							// biome-ignore lint/a11y/noStaticElementInteractions: TODO fix
							<a
								key={`${avatar.name}--${avatar.title}`}
								className={'c-menu__item'}
								// biome-ignore lint/a11y/useValidAnchor: TODO fix
								onClick={() => avatar.onClick?.(avatar)}
								onKeyUp={handleEnterOrSpace(() => avatar.onClick?.(avatar))}
							>
								<div className={'c-menu__label'}>
									<Flex orientation="vertical" center>
										<Avatar initials={avatar.initials} image={avatar.image} />
										<Spacer margin="left-small">
											<h4 className="c-h4 u-m-0">{avatar.name}</h4>
											{avatar.subtitle && (
												<span className={clsx('c-avatar-meta', styles['c-avatar-meta'])}>
													{avatar.subtitle}
												</span>
											)}
										</Spacer>
									</Flex>
								</div>
							</a>
						))}
					</DropdownContent>
				</Dropdown>
			)}
		</div>
	);
};
