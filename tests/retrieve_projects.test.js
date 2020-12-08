const jsdom = require("jsdom");
const { JSDOM } = jsdom;

import retrieveProjects from '../src/retrieve_projects';

describe('MODULE RETRIEVE PROJECTS TEST', () => {
  beforeEach(function() {
    return JSDOM.fromFile('./dist/index.html')
    .then((dom) => {
      document.body.innerHTML = dom.window.document.body.outerHTML;
    });
  });

  it('Expects the categories container to not be null', () => {
    const container = document.getElementById('categories_container');
    expect(container).toBeDefined();
  });

  it('Expect the first child of container to have All in innerHTML', () => {
    retrieveProjects();
    const container = document.getElementById('categories_container');
    expect(container.firstChild.innerHTML).toBe('All');
  });

  it('Expects the return of the function to be true', () => {
    window.localStorage.setItem('key', JSON.stringify([]));
    const length = window.localStorage.length;
    expect(retrieveProjects()).toBeTruthy();
  });

});