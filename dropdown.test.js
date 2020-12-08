const jsdom = require("jsdom");
const { JSDOM } = jsdom;

import dropdown from './src/dropdown';

describe('MODULE DROPDOWN TEST', () => {
  beforeEach(function() {
    return JSDOM.fromFile('./dist/index.html')
    .then((dom) => {
      document.body.innerHTML = dom.window.document.body.outerHTML;
    });
  });

  describe('test1', () => {
    it('Testing create task has ', () => {
      const element2 = document.getElementById('create_task').textContent;
      expect(element2).toEqual('New task');
    });
    
    it('Testing dropdown return true"', () => {
      expect(dropdown()).toBeTruthy();
    });

    it('Testing dropdown"', () => {
      expect(dropdown()).not.toBeFalsy()
    });
    
  });

});