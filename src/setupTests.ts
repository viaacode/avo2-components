import { TextDecoder, TextEncoder } from 'node:util';

Object.assign(global, { TextDecoder, TextEncoder });

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure } from 'enzyme';

configure({ adapter: new Adapter() });
