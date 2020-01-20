import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import jQuery from 'jquery';

(global as any).$ = (global as any).jQuery = jQuery;

configure({ adapter: new Adapter() });
