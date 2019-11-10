import React, { FunctionComponent, ReactNode } from 'react';

import { useSlot } from '../../hooks/useSlot';
import { ContentType, DefaultProps } from '../../types';
import { Container } from '../Container/Container';
import { Flex } from '../Flex/Flex';
import { HeaderContentType } from '../HeaderContentType/HeaderContentType';
import { Heading } from '../Heading/Heading';
import { MetaData } from '../MetaData/MetaData';
import { MetaDataItem } from '../MetaData/MetaDataItem/MetaDataItem';
import { Spacer } from '../Spacer/Spacer';
import { Toolbar } from '../Toolbar/Toolbar';
import { ToolbarLeft, ToolbarRight } from '../Toolbar/Toolbar.slots';
import { ToolbarItem } from '../Toolbar/ToolbarItem/ToolbarItem';

import { HeaderAvatar, HeaderButtons, HeaderTags } from './Header.slots';

interface HeaderProps extends DefaultProps {
	children?: ReactNode;
	category?: ContentType;
	categoryLabel?: string;
	title: string;
	onClickTitle?: () => void;
	showMetaData: boolean;
	views?: string;
	bookmarks?: string;
}

export const Header: FunctionComponent<HeaderProps> = ({
	children,
	category,
	categoryLabel,
	title,
	onClickTitle,
	views,
	bookmarks,
	showMetaData,
	className,
}) => {
	const buttonSlot = useSlot(HeaderButtons, children);
	const avatarSlot = useSlot(HeaderAvatar, children);
	const tagSlot = useSlot(HeaderTags, children);

	return (
		<Container className={className} background="alt" mode="vertical">
			<Container mode="horizontal">
				<Toolbar autoHeight>
					<ToolbarLeft>
						<ToolbarItem>
							{showMetaData && !!category && !!categoryLabel && (
								<Spacer margin="bottom-small">
									<MetaData spaced={true} category={category}>
										<MetaDataItem>
											<HeaderContentType category={category} label={categoryLabel} />
										</MetaDataItem>
										{views && <MetaDataItem icon="eye" label={views} />}
										{bookmarks && <MetaDataItem icon="bookmark" label={bookmarks} />}
									</MetaData>
								</Spacer>
							)}
							<Spacer margin="bottom-small">
								<Heading className="u-clickable u-m-0" type="h2" onClick={onClickTitle}>
									{title}
								</Heading>
							</Spacer>
							{(avatarSlot || tagSlot) && (
								<Flex spaced="regular">
									{avatarSlot}
									{tagSlot}
								</Flex>
							)}
						</ToolbarItem>
					</ToolbarLeft>
					{buttonSlot && (
						<ToolbarRight>
							<ToolbarItem>{buttonSlot}</ToolbarItem>
						</ToolbarRight>
					)}
				</Toolbar>
			</Container>
		</Container>
	);
};
