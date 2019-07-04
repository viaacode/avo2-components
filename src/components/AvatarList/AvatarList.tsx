import React, { FunctionComponent } from 'react';

import { Avatar, AvatarProps } from '../Avatar/Avatar';
import { Spacer } from '../Spacer/Spacer';
import { Tooltip } from '../Tooltip/Tooltip';

export interface AvatarListProps {
	avatars: AvatarProps[];
}

const twoDecimalize = (input: number): string => input.toString().padStart(2, '0');

export const AvatarList: FunctionComponent<AvatarListProps> = ({ avatars }: AvatarListProps) => {
	const visibleAvatars = avatars.slice(0, 3);
	const hiddenAvatars = avatars.slice(3, avatars.length);
	const hasHiddenAvatars = hiddenAvatars && !!hiddenAvatars.length;

	return (
		<div className="c-avatar--multiple">
			{visibleAvatars.map((avatar, index) => (
				<div className="c-avatar c-avatar--img" data-tooltip={`index-${twoDecimalize(index)}`}>
					<Avatar initials={avatar.initials} />
					<Tooltip placement="bottom" index={`index-${twoDecimalize(index)}`}>
						<h4 className="c-h4 u-m-0">{avatar.name}</h4>
						{/* <span className="c-tooltip__meta">{avatar.subtitle}</span> */}
					</Tooltip>
				</div>
			))}
			{hasHiddenAvatars && (
				<button className="c-avatar c-avatar-dropdown" data-dropdown="multipleAvatarsDropdown">
					+{hiddenAvatars.length}
				</button>
			)}
			{hasHiddenAvatars &&
				hiddenAvatars.map((avatar, index) => (
					<div className="c-menu" id="multipleAvatarsDropdown">
						<a className="c-menu__item" href="#">
							<div className="c-menu__label">
								<div className="o-flex o-flex--vertical-center">
									<div className="c-avatar c-avatar--img">
										<img src="/images/avatars/avatar-4.jpg" />
									</div>
									<Spacer margin="left-small">
										<h4 className="c-h4 u-m-0">Bart Vlaeminck</h4>
										<span className="c-avatar-meta">Mag bewerken</span>
									</Spacer>
								</div>
							</div>
						</a>
						<a className="c-menu__item" href="#">
							<div className="c-menu__label">
								<div className="o-flex o-flex--vertical-center">
									<div className="c-avatar c-avatar--img">
										<img src="/images/avatars/avatar-2.jpg" />
									</div>
									<Spacer margin="left-small">
										<p className="u-text-bold">Sofie Rademaeckers</p>
										<span className="c-avatar-meta">Mag bewerken</span>
									</Spacer>
								</div>
							</div>
						</a>
					</div>
				))}
		</div>
	);
};
