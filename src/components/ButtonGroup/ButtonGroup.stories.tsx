import { Button } from '../Button/Button.js';

import { ButtonGroup } from './ButtonGroup.js';

export default {
  title: 'components/ButtonGroup',

  parameters: {
    jest: ['ButtonGroup'],
  },
};

export const ButtonGroup5Buttons = () => (
  <ButtonGroup>
    <Button type="secondary" label="Test Button One" />
    <Button type="secondary" label="Test Button Two" />
    <Button type="secondary" label="Test Button Three" />
    <Button type="secondary" label="Test Button Four" />
    <Button type="secondary" label="Test Button Five" />
  </ButtonGroup>
);

ButtonGroup5Buttons.story = {
  name: 'ButtonGroup 5 buttons',
};

export const ButtonGroup2Buttons = () => (
  <ButtonGroup>
    <Button type="secondary" label="Test Button One" />
    <Button type="secondary" label="Test Button Two" />
  </ButtonGroup>
);

ButtonGroup2Buttons.story = {
  name: 'ButtonGroup 2 buttons',
};

export const ButtonGroup1Buttons = () => (
  <ButtonGroup>
    <Button type="secondary" label="Test Button One" />
  </ButtonGroup>
);

ButtonGroup1Buttons.story = {
  name: 'ButtonGroup 1 buttons',
};
