import { storiesOf } from '@storybook/react';
import React from 'react';

import { times } from '../../helpers/times';
import { Avatar } from '../Avatar/Avatar';
import { Button } from '../Button/Button';
import { ButtonToolbar } from '../ButtonToolbar/ButtonToolbar';
import { TagList } from '../TagList/TagList';

import { Header } from './Header';
import { MOCK_HEADER_PROPS, MOCK_HEADER_PROPS_FULL } from './Header.mock';
import { HeaderBottomRowLeft, HeaderMiddleRowRight, HeaderTopRowLeft } from './Header.slots';

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
