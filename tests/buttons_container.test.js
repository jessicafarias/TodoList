import buttonsContainer from '../src/buttons_container';

const jsdom = require('jsdom');

const { JSDOM } = jsdom;

describe('MODULE BUTTONS CONTAINER TASK', () => {
  beforeEach(() => JSDOM.fromFile('./dist/index.html')
    .then((dom) => {
      document.body.innerHTML = dom.window.document.body.outerHTML;
    }));
});

it('Expects to get a HTML div element', () => {
  expect(typeof buttonsContainer()).toBe('object');
});

it('Expects to return the innerHTML of the first childElement', () => {
  expect(buttonsContainer().firstChild.innerHTML).toBe('Edit');
});

it('Expects to return the innerHTML of the first childElement', () => {
  expect(buttonsContainer().lastChild.innerHTML).toBe('Delete');
});
