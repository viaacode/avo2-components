import { times } from '../../helpers/times';
import { Avatar } from '../Avatar/Avatar';
import { Button } from '../Button/Button';
import { ButtonToolbar } from '../ButtonToolbar/ButtonToolbar';
import { TagList } from '../TagList/TagList';

import { Header } from './Header';
import { MOCK_HEADER_PROPS, MOCK_HEADER_PROPS_FULL } from './Header.mock';
import { HeaderBottomRowLeft, HeaderMiddleRowRight, HeaderTopRowLeft } from './Header.slots';

export default {
	title: 'components/Header',

	parameters: {
		jest: ['Header'],
	},
};

export const _Header = () => <Header {...MOCK_HEADER_PROPS} />;
export const HeaderWithMetaData = () => <Header {...MOCK_HEADER_PROPS_FULL} />;

HeaderWithMetaData.story = {
	name: 'Header with meta data',
};

export const HeaderWithSlots = () => (
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
);

HeaderWithSlots.story = {
	name: 'Header with slots',
};

export const HeaderWithLongTitle = () => (
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
);

HeaderWithLongTitle.story = {
	name: 'Header with long title',
};
