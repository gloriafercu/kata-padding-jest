const paddingLeft = require('./index');

describe ('Padding-left App', () => {
	test('add space in the left', () => {
	  expect(paddingLeft('hola', 6, 'x')).toBe('xxhola');
	});
	test('if final size minor or equal than initial print the same string', () => {
	  expect(paddingLeft('hola', 2, 'x')).toBe('hola');
		expect(paddingLeft('hola', 4, 'x')).toBe('hola');
	});
});
