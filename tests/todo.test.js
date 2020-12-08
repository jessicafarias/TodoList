import toDo from '../src/todo';

const jsdom = require('jsdom');

const { JSDOM } = jsdom;

describe('MODULE TASK TO DO', () => {
  beforeEach(() => JSDOM.fromFile('./dist/index.html')
    .then((dom) => {
      document.body.innerHTML = dom.window.document.body.outerHTML;
    }));

  it('Gett description from toDo object', () => {
    expect(toDo('title', 'desc', '10/12/20', 1).description).toBe('desc');
  });

  it('Gett DueDate from toDo object', () => {
    expect(toDo('title', 'desc', '10/12/20', 1).dueDate).toBe('10/12/20');
  });

  it('Gett priority from toDo object', () => {
    expect(toDo('title', 'desc', '10/12/20', 1).priority).toBe(1);
  });

  it('Gett title from toDo object', () => {
    expect(toDo('title', 'desc', '10/12/20', 1).title).toBe('title');
  });
});