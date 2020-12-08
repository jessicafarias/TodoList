const jsdom = require("jsdom");
const { JSDOM } = jsdom;

import UpdateTask from './src/update_task';

describe('MODULE UPDATE TASK', () => {
  beforeEach(function() {
    return JSDOM.fromFile('./dist/index.html')
    .then((dom) => {
      document.body.innerHTML = dom.window.document.body.outerHTML;
    });
  });

  describe('Testing localstorage', () => {
    it('Return error message if cant find key in localstorage', () => {
      expect(UpdateTask("key",0)).toBe("Cannot read property 'splice' of null");
    });
    it('Return true find key in localstorage', () => {
      localStorage.setItem("key", JSON.stringify([]));
      expect(UpdateTask("key",0)).toBeTruthy();
    });
  });

  describe('Testing html elements', () => {
    it('Get title from html', () => {
      modal_title = document.getElementById('modal_title');
      expect(modal_title).not.toBeNull();
    });
    it('Get description from html', () => {
      modal_description = document.getElementById('modal_description');
      expect(modal_description).not.toBeNull();
    });
    it('Get dueDate from html', () => {
      modal_dueDate = document.getElementById('modal_dueDate');
      expect(modal_dueDate).not.toBeNull();
    });
    it('Get priority from html', () => {
      modal_priority = document.getElementById('modal_priority');
      expect(modal_priority).not.toBeNull();
    });
  });

});
