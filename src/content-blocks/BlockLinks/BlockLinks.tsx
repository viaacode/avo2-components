import classnames from 'classnames';
import React, { FunctionComponent } from 'react';

import { Container } from '../../components/Container/Container';
import { Flex } from '../../components/Flex/Flex';
import { DefaultProps } from '../../types';

export interface BlockLinksProps extends DefaultProps {
	uniqueKey: string; // Needed to ensure react can keep track of the list of rendered items
	links: { label: string; url: string }[];
}

export const BlockLinks: FunctionComponent<BlockLinksProps> = ({ className, uniqueKey, links }) => {
	return (
		<Container
			className={classnames(className, 'o-container-vertical-anchor-links')}
			mode="vertical"
		>
			<Container mode="horizontal">
				<Flex center orientation="horizontal">
					<ul className="c-bordered-list-horizontal">
						{links.map(linkInfo => (
							<li key={`${uniqueKey}-${linkInfo.url}`}>
								<a href={linkInfo.url}>{linkInfo.label}</a>
							</li>
						))}
					</ul>
				</Flex>
			</Container>
		</Container>
	);
};
