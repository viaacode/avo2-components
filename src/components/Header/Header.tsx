import type { Avo } from '@viaa/avo2-types';
import clsx from 'clsx';
import type { FunctionComponent, ReactNode } from 'react';

import { useSlot } from '../../hooks/useSlot';
import { type DefaultProps, translateContentType } from '../../types';
import { Container, type ContainerPropsSchema } from '../Container/Container';
import { Flex } from '../Flex/Flex';
import { HeaderContentType } from '../HeaderContentType/HeaderContentType';
import { IconNameSchema } from '../Icon/Icon.types';
import { MetaData } from '../MetaData/MetaData';
import { MetaDataItem } from '../MetaData/MetaDataItem/MetaDataItem';
import { Spacer } from '../Spacer/Spacer';
import { Toolbar } from '../Toolbar/Toolbar';
import { ToolbarLeft, ToolbarRight } from '../Toolbar/Toolbar.slots';
import { ToolbarItem } from '../Toolbar/ToolbarItem/ToolbarItem';

import './Header.scss';
import { handleEnterOrSpace } from '../../utils';
import {
	HeaderAvatar,
	HeaderBottomRowLeft,
	HeaderBottomRowRight,
	HeaderButtons,
	HeaderMiddleRowLeft,
	HeaderMiddleRowRight,
	HeaderRow,
	HeaderTags,
	HeaderTopRowLeft,
	HeaderTopRowRight,
} from './Header.slots';

export interface HeaderPropsSchema extends DefaultProps {
	bookmarks?: string;
	category?: Avo.ContentType.English;
	children?: ReactNode;
	containerSize?: ContainerPropsSchema['size'];
	onClickTitle?: () => void;
	showMetaData: boolean;
	title: string | ReactNode;
	views?: string;
}

export const Header: FunctionComponent<HeaderPropsSchema> = ({
	bookmarks,
	category,
	children,
	className,
	containerSize,
	onClickTitle,
	showMetaData,
	title,
	views,
}) => {
	const buttonSlot = useSlot(HeaderButtons, children);
	const avatarSlot = useSlot(HeaderAvatar, children);
	const tagSlot = useSlot(HeaderTags, children);
	const rowSlot = useSlot(HeaderRow, children);
	const headerTopRowLeftSlot = useSlot(HeaderTopRowLeft, children);
	const headerTopRowRightSlot = useSlot(HeaderTopRowRight, children);
	const headerMiddleRowLeftSlot = useSlot(HeaderMiddleRowLeft, children);
	const headerMiddleRowRightSlot = useSlot(HeaderMiddleRowRight, children);
	const headerBottomRowLeftSlot = useSlot(HeaderBottomRowLeft, children);
	const headerBottomRowRightSlot = useSlot(HeaderBottomRowRight, children);

	const renderTitle = () => {
		if (typeof title === 'string') {
			return (
				<h2
					className={clsx(className, `c-heading c-h2`, 'u-m-0', {
						'u-clickable': onClickTitle,
					})}
					onClick={onClickTitle}
					onKeyUp={handleEnterOrSpace(onClickTitle)}
				>
					{title}
				</h2>
			);
		} else {
			return title;
		}
	};

	return (
		<Container
			className={clsx('c-header', className)}
			background="alt"
			mode="vertical"
			size={containerSize}
		>
			<Container mode="horizontal">
				<Toolbar autoHeight>
					<ToolbarLeft>
						<ToolbarItem className="c-header__top-row-left-slot">
							{showMetaData && !!category && (
								<MetaData spaced={true} category={category}>
									<MetaDataItem>
										<HeaderContentType
											category={category}
											label={translateContentType(category, 'en', false)}
										/>
									</MetaDataItem>
									{views && <MetaDataItem icon={IconNameSchema.eye} label={views} />}
									{bookmarks && <MetaDataItem icon={IconNameSchema.bookmark} label={bookmarks} />}
								</MetaData>
							)}
							{headerTopRowLeftSlot}
						</ToolbarItem>
					</ToolbarLeft>
					<ToolbarRight>
						<ToolbarItem className="c-header__top-row-right-slot">
							{headerTopRowRightSlot}
						</ToolbarItem>
					</ToolbarRight>
				</Toolbar>
				<Toolbar autoHeight>
					<ToolbarLeft>
						<ToolbarItem className="c-header__middle-row-left-slot">
							{renderTitle()}
							{headerMiddleRowLeftSlot}
						</ToolbarItem>
					</ToolbarLeft>
					<ToolbarRight>
						<ToolbarItem className="c-header__middle-row-right-slot">
							{buttonSlot}
							{headerMiddleRowRightSlot}
						</ToolbarItem>
					</ToolbarRight>
				</Toolbar>
				<Toolbar autoHeight>
					<ToolbarLeft>
						<ToolbarItem className="c-header__bottom-row-left-slot">
							{(avatarSlot || tagSlot) && (
								<Spacer margin="top-small">
									<Flex spaced="regular">
										{avatarSlot}
										{tagSlot}
									</Flex>
								</Spacer>
							)}
							{rowSlot}
							{headerBottomRowLeftSlot}
						</ToolbarItem>
					</ToolbarLeft>
					<ToolbarRight>
						<ToolbarItem className="c-header__bottom-row-right-slot">
							{headerBottomRowRightSlot}
						</ToolbarItem>
					</ToolbarRight>
				</Toolbar>
			</Container>
		</Container>
	);
};
