const paddingLeft = require('./index');

describe ('Padding-left App', () => {
	test('add space in the left', () => {
	  expect(paddingLeft('hola', 6, ' ')).toBe('  hola');
	});
	test('if final size minor or equal than initial print the same string', () => {
	  expect(paddingLeft('hola', 2, ' ')).toBe('hola');
		expect(paddingLeft('hola', 4, ' ')).toBe('hola');
	});
	test('if function paddingLeft received only 2 parameters', () => {
	  expect(paddingLeft('hola', 6).toBe(NaN);
	});
});
