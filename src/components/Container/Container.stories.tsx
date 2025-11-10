import { loremIpsum } from 'lorem-ipsum';
import { Fragment } from 'react';

import { Container } from './Container.js';

const content = loremIpsum({ count: 10 });

export default {
  title: 'components/Container',

  parameters: {
    jest: ['Container'],
  },
};

export const HorizontalContainers = () => (
  <Fragment>
    <Container mode="horizontal">{content}</Container>
    <br />
    <Container mode="horizontal" size="full-width">
      {content}
    </Container>
    <br />
    <Container mode="horizontal" size="large">
      {content}
    </Container>
    <br />
    <Container mode="horizontal" size="medium">
      {content}
    </Container>
    <br />
    <Container mode="horizontal" size="small">
      {content}
    </Container>
  </Fragment>
);

HorizontalContainers.story = {
  name: 'Horizontal containers',
};

export const VerticalContainers = () => (
  <Fragment>
    <Container mode="vertical" size="small">
      {content}
    </Container>
    <Container mode="vertical">{content}</Container>
    <Container mode="vertical" size="medium">
      {content}
    </Container>
    <Container mode="vertical" size="large">
      {content}
    </Container>
  </Fragment>
);

VerticalContainers.story = {
  name: 'Vertical containers',
};

export const BorderedContainers = () => (
  <Container mode="vertical" bordered>
    {content}
  </Container>
);

BorderedContainers.story = {
  name: 'Bordered containers',
};

export const ContainerBackgrounds = () => (
  <Fragment>
    <Container mode="vertical">{content}</Container>
    <Container mode="vertical" background="alt">
      {content}
    </Container>
    <Container mode="vertical" background="inverse">
      <p style={{ color: 'white' }}>{content}</p>
    </Container>
  </Fragment>
);

ContainerBackgrounds.story = {
  name: 'Container backgrounds',
};

export const CombinedContainers = () => (
  <Fragment>
    <Container mode="vertical" size="large">
      <Container mode="horizontal">{content}</Container>
    </Container>
    <Container mode="vertical" background="alt" size="large">
      <Container mode="horizontal">{content}</Container>
    </Container>
    <Container mode="vertical" size="large">
      <Container mode="horizontal">{content}</Container>
    </Container>
    <Container mode="vertical" background="alt" size="large">
      <Container mode="horizontal">{content}</Container>
    </Container>
  </Fragment>
);

CombinedContainers.story = {
  name: 'Combined containers',
};
