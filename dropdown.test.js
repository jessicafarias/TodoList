import dropdown from './src/dropdown';

const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const dom = new JSDOM(`<!DOCTYPE html><p id="dropdown">Hello world</p>`);
console.log(dom.window.document.querySelector("p").textContent); // "Hello world"

test('use jsdom in this test file', () => {
  const element = document.createElement('div');
  expect(element).not.toBeNull();
});

/*
test('testing dropdown', ()=>{
  const element = document.getElementById('dropdown');
  expect(dropdown()).toBeTruthy();
});
*/