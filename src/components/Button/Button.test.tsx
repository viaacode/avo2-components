import { shallow } from 'enzyme';
import React from 'react';
import { Button } from './Button';

it('renders without crashing', () => {
	shallow(<Button onClick={() => {}}>Click me!</Button>);
});
