import { shallow } from 'enzyme';
import { loremIpsum } from 'lorem-ipsum';
import React from 'react';

import { Text } from './Text';

const content = loremIpsum({ count: 10 });

describe('<Text />', () => {
	it('Should be able to render', () => {
		shallow(<Text>{content}</Text>);
	});

	it('should pass a custom className', () => {
		const customClass = 'c-text-custom';
		const TextComponent = <Text className={customClass}>{content}</Text>;

		expect(shallow(TextComponent).hasClass(customClass)).toBeTruthy();
	});

	it('Should correctly pass children', () => {
		const TextComponent = shallow(
			<Text>
				<a href="https://viaa.be/">{content}</a>
			</Text>
		);

		const child = TextComponent.find('a');

		expect(TextComponent.children().html()).toEqual(child.html());
	});
});
