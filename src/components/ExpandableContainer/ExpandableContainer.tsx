import React, { Fragment, FunctionComponent, ReactNode } from 'react';

import useCollapsed from '../../hooks/react-collapsed/react-collapsed';
import { Button } from '../Button/Button';
import { Spacer } from '../Spacer/Spacer';

export interface ExpandableContainerPropsSchema {
	children: ReactNode;
	collapsedHeight?: number;
	collapseLabel?: string;
	collapseNode?: ReactNode;
	defaultExpanded?: boolean;
	expandLabel?: string;
	expandNode?: ReactNode;
	onChange?: (isOpen: boolean) => void;
}

export const ExpandableContainer: FunctionComponent<ExpandableContainerPropsSchema> = ({
	children,
	collapsedHeight = 44,
	collapseLabel = 'Minder lezen',
	collapseNode,
	defaultExpanded = false,
	expandLabel = 'Meer lezen',
	expandNode,
	onChange,
}) => {
	const { getCollapseProps, getToggleProps, isOpen } = useCollapsed({
		collapsedHeight,
		defaultOpen: defaultExpanded,
		onChange,
	});

	const hasCustomControlNodes = collapseNode && expandNode;

	return (
		<Fragment>
			<div {...getCollapseProps()}>
				<div>{children}</div>
			</div>

			<Spacer
				className={!hasCustomControlNodes ? 'u-text-center' : undefined}
				margin="top-small"
			>
				<div {...(getToggleProps() as any)}>
					{hasCustomControlNodes ? (
						isOpen ? (
							collapseNode
						) : (
							expandNode
						)
					) : (
						<Button
							type="secondary"
							label={isOpen ? collapseLabel : expandLabel}
							onClick={(evt) => evt.currentTarget.blur()}
						/>
					)}
				</div>
			</Spacer>
		</Fragment>
	);
};
