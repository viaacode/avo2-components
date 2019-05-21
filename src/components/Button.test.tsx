import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './Button';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Button onClick={() => {}}>Click me!</Button>, div);
	ReactDOM.unmountComponentAtNode(div);
});
