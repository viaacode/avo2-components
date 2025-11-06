import { storiesOf } from '@storybook/react';
import React from 'react';

import { times } from '../../helpers/times.js';
import { Avatar } from '../Avatar/Avatar.js';
import { Button } from '../Button/Button.js';
import { ButtonToolbar } from '../ButtonToolbar/ButtonToolbar.js';
import { TagList } from '../TagList/TagList.js';

import { Header } from './Header.js';
import { MOCK_HEADER_PROPS, MOCK_HEADER_PROPS_FULL } from './Header.mock.js';
import { HeaderBottomRowLeft, HeaderMiddleRowRight, HeaderTopRowLeft } from './Header.slots.js';

storiesOf('components/Header', module)
	.addParameters({ jest: ['Header'] })
	.add('Header', () => <Header {...MOCK_HEADER_PROPS} />)
	.add('Header with meta data', () => <Header {...MOCK_HEADER_PROPS_FULL} />)
	.add('Header with slots', () => (
		<Header {...MOCK_HEADER_PROPS}>
			<HeaderMiddleRowRight>
				<Button type="secondary" label="Bekijk" onClick={() => null} />
			</HeaderMiddleRowRight>
			<HeaderBottomRowLeft>
				<Avatar initials="BN" name="Benjamin Naesen" dark />
			</HeaderBottomRowLeft>
			<HeaderTopRowLeft>
				<TagList
					tags={[
						{
							label: 'Rekenkunde',
							id: 'rekenkunde',
							color: '#9b1c31',
						},
					]}
				/>
			</HeaderTopRowLeft>
		</Header>
	))
	.add('Header with long title', () => (
		<Header
			{...MOCK_HEADER_PROPS_FULL}
			title="overlap video test Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras convallis odio udgse sdfes se"
		>
			<HeaderMiddleRowRight>
				<ButtonToolbar>
					{times(4).map((index) => (
						<Button
							type="secondary"
							label="Bekijk"
							onClick={() => null}
							key={`header-button-${index}`}
						/>
					))}
				</ButtonToolbar>
			</HeaderMiddleRowRight>
		</Header>
	));
