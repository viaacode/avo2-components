import { fireEvent, render } from '@testing-library/react';
import { Fragment } from 'react';

import { ExpandableContainer } from './ExpandableContainer';

describe('<Container />', () => {
	it('Should be able to render', () => {
		render(
			<ExpandableContainer>
				<Fragment />
			</ExpandableContainer>
		);
	});

	it('Should set the correct collapsed height', () => {
		const height = 40;

		const { container } = render(
			<ExpandableContainer collapsedHeight={height}>
				<Fragment />
			</ExpandableContainer>
		);

		const textContentDiv = container.firstChild as HTMLElement;

		expect(textContentDiv.style.height).toEqual(`${height}px`);
	});

	it('Should render with custom expand/collapse labels', () => {
		const collapsedLabel = 'less';
		const expandLabel = 'more';

		const { container } = render(
			<ExpandableContainer collapseLabel={collapsedLabel} expandLabel={expandLabel}>
				<Fragment />
			</ExpandableContainer>
		);

		const button = container.querySelector('.c-button') as HTMLElement;
		const buttonLabel = container.querySelector('.c-button__label');

		expect(buttonLabel).toHaveTextContent(expandLabel);

		fireEvent.click(button);

		expect(buttonLabel).toHaveTextContent(collapsedLabel);
	});

	it('Should render collapsed state by default', () => {
		const { container } = render(
			<ExpandableContainer>
				<Fragment />
			</ExpandableContainer>
		);

		const button = container.querySelector('.c-button') as HTMLElement;
		const buttonLabel = container.querySelector('.c-button__label');

		expect(buttonLabel).toHaveTextContent('Meer lezen');

		fireEvent.click(button);

		expect(buttonLabel).toHaveTextContent('Minder lezen');
	});

	it('Should render expanded state if defaultExpanded is true', () => {
		const { container } = render(
			<ExpandableContainer defaultExpanded={true}>
				<Fragment />
			</ExpandableContainer>
		);

		const button = container.querySelector('.c-button') as HTMLElement;
		const buttonLabel = container.querySelector('.c-button__label');

		expect(buttonLabel).toHaveTextContent('Minder lezen');
		expect(buttonLabel).not.toHaveTextContent('Meer lezen');

		fireEvent.click(button);

		expect(buttonLabel).toHaveTextContent('Meer lezen');
	});
});
