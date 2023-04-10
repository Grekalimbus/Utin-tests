const axios = require('axios');
const mapArrToString = require('../mapArrToString/mapArrToString.js');

const getData = async () => {
  try {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const response = await axios.get(url);
    const userId = response.data.map((user) => user.id);
    return mapArrToString(userId);
  } catch (e) {
    console.log(e);
  }
};

module.exports = getData;
