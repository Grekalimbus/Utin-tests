const mapArrToString = require('./mapArrToString');

describe('mapArrToString', () => {
  test('Корректное значение', () => {
    expect(mapArrToString([1, 2, 3])).toEqual(['1', '2', '3']);
  });
  test('Смешанные элемы массива', () => {
    expect(mapArrToString([undefined, false, null, 1, 2, 'asa'])).toEqual(['1', '2']);
  });
  test('Пустой массив', () => {
    expect(mapArrToString([])).toEqual([]);
  });
  test('Отрицание', () => {
    expect(mapArrToString([1, 2, 3])).not.toEqual([1, 2, 3, 4]);
  });
});
