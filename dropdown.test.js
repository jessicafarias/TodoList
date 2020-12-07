import dropdown from './src/dropdown';

document.body.innerHTML = '<select id="dropdown"></select>';

test('Testing Dropdown', () => {
  expect(dropdown()).toBeTruthy();
});
