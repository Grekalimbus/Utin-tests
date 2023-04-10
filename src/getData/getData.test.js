const getData = require('./getData');
const axios = require('axios');

jest.mock('axios');

describe('GetData', () => {
  let responce;
  beforeEach(() => {
    responce = {
      data: [
        {
          id: 1,
          name: 'Leanne Graham',
          username: 'Bret',
          email: 'Sincere@april.biz',
          phone: '1-770-736-8031 x56442',
          website: 'hildegard.org',
        },
        {
          id: 2,
          name: 'Ervin Howell',
          username: 'Antonette',
          email: 'Shanna@melissa.tv',
          phone: '010-692-6593 x09125',
          website: 'anastasia.net',
        },
      ],
    };
  });
  test('Корректное значение', async () => {
    axios.get.mockReturnValue(responce);
    const data = await getData();
    expect(axios.get).toBeCalledTimes(1); // строчка которая говорит о том, что функция вызвалась хотя бы 1 раз
    expect(data).toEqual(['1', '2']);
  });
});
