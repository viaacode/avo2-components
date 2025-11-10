import { loremIpsum } from 'lorem-ipsum';
import { Fragment } from 'react';

import { Spacer } from './Spacer.js';

const content = loremIpsum({ count: 3 });

export default {
  title: 'components/Spacer',

  parameters: {
    jest: ['Spacer'],
  },
};

export const SpacerMargins = () => (
  <Fragment>
    <p>
      <b>none </b>
      {content}
    </p>
    <Spacer margin="none">
      <b>none </b>
      {content}
    </Spacer>
    <Spacer margin="small">
      <b>small</b>
      {content}
    </Spacer>
    <Spacer>
      <b>medium</b>
      {content}
    </Spacer>
    <Spacer margin="large">
      <b>large</b>
      {content}
    </Spacer>
    <Spacer margin="extra-large">
      <b>extra-large</b>
      {content}
    </Spacer>
    <p>{content}</p>
  </Fragment>
);

SpacerMargins.story = {
  name: 'Spacer margins',
};

export const SpacerWithMultipleMargins = () => (
  <Fragment>
    <p>{content}</p>
    <Spacer margin={['left-large', 'top-large', 'bottom-large']}>
      <p>{content}</p>
    </Spacer>
    <p>{content}</p>
  </Fragment>
);

SpacerWithMultipleMargins.story = {
  name: 'Spacer with multiple margins',
};

export const SpacerPaddings = () => (
  <Fragment>
    <p>
      <b>none </b>
      {content}
    </p>
    <Spacer padding="small">
      <b>small </b>
      {content}
    </Spacer>
    <Spacer padding="medium">
      <b>medium </b>
      {content}
    </Spacer>
    <Spacer padding="large">
      <b>large </b>
      {content}
    </Spacer>
    <Spacer padding="extra-large">
      <b>extra-large </b>
      {content}
    </Spacer>
    <p>{content}</p>
  </Fragment>
);

SpacerPaddings.story = {
  name: 'Spacer paddings',
};

export const SpacerWithMultiplePaddings = () => (
  <Fragment>
    <p>{content}</p>
    <Spacer padding={['left-large', 'top-large', 'bottom-large']}>
      <p>{content}</p>
    </Spacer>
    <p>{content}</p>
  </Fragment>
);

SpacerWithMultiplePaddings.story = {
  name: 'Spacer with multiple paddings',
};

export const SpacerMixed = () => (
  <Fragment>
    <p>{content}</p>
    <Spacer margin={['left-large', 'right-large']} padding={['top-large', 'bottom-large']}>
      <p>{content}</p>
    </Spacer>
    <p>{content}</p>
  </Fragment>
);

SpacerMixed.story = {
  name: 'Spacer mixed',
};
