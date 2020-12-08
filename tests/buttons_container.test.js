const jsdom = require("jsdom");
const { JSDOM } = jsdom;

import buttonsContainer from '../src/buttons_container';

describe('MODULE UPDATE TASK', () => {
  beforeEach(function() {
    return JSDOM.fromFile('./dist/index.html')
    .then((dom) => {
      document.body.innerHTML = dom.window.document.body.outerHTML;
    });
  });
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
