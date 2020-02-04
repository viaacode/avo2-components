import React, { FunctionComponent } from 'react';

export interface BlockMediaListProps {
	elements: any[];
}

export const BlockMediaList: FunctionComponent<BlockMediaListProps> = ({ elements }) => {
	return <div className="c-media-card-list"></div>;
};
