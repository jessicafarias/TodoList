import dropdown from './src/dropdown';

const jsdom = require("jsdom");
const { JSDOM } = jsdom;

beforeEach(function() {
  return JSDOM.fromFile('./dist/index.html')
  .then((dom) => {
    console.log(dom.window.document.getElementById('create_task').textContent +"sjkdn");
  });
}); //Display the text inside create_task


test('TESTING DROPDOWN', () => {
  let a =true;
  beforeEach(function() {
    JSDOM.fromFile('./dist/index.html')
    .then((dom) => {
      //console.log(dom.window.document.getElementById('create_task').textContent);
      a=false;//Do not oveerride
      expect(dropdown()).toBeFalsy(); //No passe
      //expect(dropdown()).toBetrue(); //Pass
    });
  });
  expect(a.toBeFalsy)
  console.log(a);
}); //Do not override a;

