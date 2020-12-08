import createTask from '../src/new_task';

const jsdom = require('jsdom');

const { JSDOM } = jsdom;

describe('MODULE NEW TASK TEST', () => {
  beforeEach(() => JSDOM.fromFile('./dist/index.html')
    .then((dom) => {
      document.body.innerHTML = dom.window.document.body.outerHTML;
    }));

  it('Expects a new task object instance', () => {
    const someValue = 'key';
    window.localStorage.setItem(someValue, JSON.stringify([]));
    expect(typeof createTask(someValue)).toBe('object');
  });

  it('Expects a TypeError, for nothing is fetched from localStorage', () => {
    expect(createTask()).toBe("Cannot read property 'push' of null");
  });
});