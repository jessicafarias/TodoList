import dropdown from '../src/dropdown';

const jsdom = require('jsdom');

const { JSDOM } = jsdom;

describe('MODULE DROPDOWN TEST', () => {
  beforeEach(() => JSDOM.fromFile('./dist/index.html')
    .then((dom) => {
      document.body.innerHTML = dom.window.document.body.outerHTML;
    }));

  describe('test1', () => {
    it('Testing if dropdown exist', () => {
      const element2 = document.getElementById('dropdown');
      expect(element2).not.toBeNull();
    });

    it('Testing dropdown return true"', () => {
      expect(dropdown()).toBeTruthy();
    });

    it('Testing dropdown"', () => {
      expect(dropdown()).not.toBeFalsy();
    });
  });
});
