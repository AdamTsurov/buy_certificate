import axios from 'axios';

const API_URL = '/service/api/api';
const API_KEY = '011ba11bdcad4fa396660c2ec447ef14';

export const fetchCertificates = async () => {
  try {
    const response = await axios.post(API_URL, {
      ApiKey: API_KEY,
      MethodName: 'OSGetGoodList',
      ID: '5',
    });

    if (response.data.result === 0) {
      return response.data.data;
    } else {
      return response.data.resultdescription;
    }
  } catch (error) {
    console.error('Ошибка при получении сертификатов:', error);
  }
};
