const square = require('./square');

describe('square', () => {
  // Перед каждым тестом
  beforeEach(() => {
    // Add data in BD
  });
  // Один раз, перед всеми тестами
  beforeAll(() => {
    // add data in BD
  });
  test('Корректное значение', () => {
    const spyMathPow = jest.spyOn(Math, 'pow');
    square(1);
    expect(spyMathPow).toBeCalledTimes(0);
    expect(square(1)).toBe(1);
  });
  test('Корректное значение', () => {
    const spyMathPow = jest.spyOn(Math, 'pow');
    square(2);
    expect(spyMathPow).toBeCalledTimes(1);
    expect(square(2)).toBe(4);
  });
  //   После каждого теста
  afterEach(() => {
    // Delete data in BD
    jest.clearAllMocks();
  });
  //   Один раз после всех тестов
  afterAll(() => {
    // Delete data in BD
  });
});
