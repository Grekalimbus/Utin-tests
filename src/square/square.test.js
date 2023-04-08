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
    expect(square(2)).toBe(4);
    expect(square(2)).toBeLessThan(5); // проверка на то, что число < 5
    expect(square(2)).toBeGreaterThan(3); // проверка на то, что число > 3
    expect(square(2)).not.toBeUndefined(); // проверка на то, что возврат !== undefined
  });
  //   После каждого теста
  afretEach(() => {
    // Delete data in BD
  });
  //   Один раз после всех тестов
  afterAll(() => {
    // Delete data in BD
  });
});
