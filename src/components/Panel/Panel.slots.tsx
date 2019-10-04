import { FunctionComponent } from 'react';

import { SlotProps } from '../../types';

export const PanelHeader: FunctionComponent<SlotProps> = ({ children }) => children;
export const PanelBody: FunctionComponent<SlotProps> = ({ children }) => children;
