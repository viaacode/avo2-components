import { loremIpsum } from 'lorem-ipsum';

import { Box } from './Box.js';

const content = loremIpsum({ count: 10 });

export default {
  title: 'components/Box',

  parameters: {
    jest: ['Box'],
  },
};

export const _Box = () => <Box>{content}</Box>;
export const CondensedBox = () => <Box condensed>{content}</Box>;
export const BoxWithBackground = () => <Box backgroundColor="white">{content}</Box>;

BoxWithBackground.story = {
  name: 'Box with Background',
};
