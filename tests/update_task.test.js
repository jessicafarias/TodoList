import updateTask from '../src/update_task';

const jsdom = require('jsdom');

const { JSDOM } = jsdom;

describe('MODULE UPDATE TASK', () => {
  beforeEach(() => JSDOM.fromFile('./dist/index.html')
    .then((dom) => {
      document.body.innerHTML = dom.window.document.body.outerHTML;
    }));

  describe('Testing localstorage', () => {
    it('Return error message if cant find key in localstorage', () => {
      expect(updateTask('key', 0)).toBe("Cannot read property 'splice' of null");
    });
    it('Return true find key in localstorage', () => {
      localStorage.setItem('key', JSON.stringify([]));
      expect(updateTask('key', 0)).toBeTruthy();
    });
  });

  describe('Testing html elements', () => {
    it('Get title from html', () => {
      const modalTitle = document.getElementById('modal_title');
      expect(modalTitle).not.toBeNull();
    });
    it('Get description from html', () => {
      const modalDescription = document.getElementById('modal_description');
      expect(modalDescription).not.toBeNull();
    });
    it('Get dueDate from html', () => {
      const modalDueDate = document.getElementById('modal_dueDate');
      expect(modalDueDate).not.toBeNull();
    });
    it('Get priority from html', () => {
      const modalPriority = document.getElementById('modal_priority');
      expect(modalPriority).not.toBeNull();
    });
  });
});
