import { shallow } from 'enzyme';
import React from 'react';

import { WYSIWYG2 } from './WYSIWYG2';

describe('<WYSIWYG2 />', () => {
	it('Should be able to render', () => {
		shallow(<WYSIWYG2 id="test" />);
	});

	it('Should correctly pass on `id`', () => {
		const id = 'id';

		const wysiwygComponent = shallow(<WYSIWYG2 id={id} />);

		expect(wysiwygComponent.prop('id')).toEqual(id);
	});
});
