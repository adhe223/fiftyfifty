// tslint:disable-next-line:no-any
window.requestAnimationFrame = function (callback: any) {
  setTimeout(callback, 0);
  return 0;
};

import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

// tslint:disable-next-line:no-any
enzyme.configure({ adapter: new Adapter() });
