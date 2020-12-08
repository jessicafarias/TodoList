const jsdom = require("jsdom");
const { JSDOM } = jsdom;

import createTask from '../src/new_task';

describe('MODULE DROPDOWN TEST', () => {
  beforeEach(function() {
    return JSDOM.fromFile('./dist/index.html')
    .then((dom) => {
      document.body.innerHTML = dom.window.document.body.outerHTML;
    });
  });

  it('Expects a new task object instance', () => {
    expect(createTask()).toBe("Cannot read property 'push' of null");
  });

});