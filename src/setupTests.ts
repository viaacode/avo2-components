import { TextDecoder, TextEncoder } from 'util';

Object.assign(global, { TextDecoder, TextEncoder });

// eslint-disable-next-line import/first
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
// eslint-disable-next-line import/first
import { configure } from 'enzyme';

configure({ adapter: new Adapter() });
