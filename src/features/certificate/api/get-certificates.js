import axios from 'axios';

const API_URL = 'https://sycret.ru/service/api/api';
const API_KEY = '011ba11bdcad4fa396660c2ec447ef14';

const fetchCertificates = async () => {
  try {
    const response = await axios.post(API_URL, {
      ApiKey: API_KEY,
      MethodName: 'OSGetGoodList',
    });

    if (response.data.result === 0) {
      return response.data.data;
    } else {
      throw new Error(response.data.resultdescription);
    }
  } catch (error) {
    throw new Error(`Ошибка при получении сертификатов: ${error.message}`);
  }
};

export default fetchCertificates;
