import React from 'react';

import { storiesOf } from '@storybook/react';

import { Avatar } from '../Avatar/Avatar';
import { Button } from '../Button/Button';
import { TagList } from '../TagList/TagList';

import { Header } from './Header';
import { MOCK_HEADER_PROPS } from './Header.mock';
import { HeaderAvatar, HeaderButtons, HeaderTags } from './Header.slots';

storiesOf('Header', module)
	.addParameters({ jest: ['Header'] })
	.add('Header', () => <Header {...MOCK_HEADER_PROPS} />)
	.add('Header with slots', () => (
		<Header {...MOCK_HEADER_PROPS}>
			<HeaderButtons>
				<Button type="secondary" label="Bekijk" onClick={() => null} />
			</HeaderButtons>
			<HeaderAvatar>
				<Avatar initials="BN" name="Benjamin Naesen" />
			</HeaderAvatar>
			<HeaderTags>
				<TagList
					tags={[
						{
							label: 'Rekenkunde',
							id: 'rekenkunde',
							color: '#9b1c31',
						},
					]}
				/>
			</HeaderTags>
		</Header>
	));
