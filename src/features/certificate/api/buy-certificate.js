import axios from 'axios';

const API_KEY = '011ba11bdcad4fa396660c2ec447ef14'; // Ваш API-ключ
const API_URL = 'https://sycret.ru/service/api/api'; // URL для вызова API

const buyCertificates = async (certificate, clientData) => {
  try {
    const response = await axios.post(API_URL, {
      ApiKey: API_KEY,
      MethodName: 'OSSale',
      Id: certificate.Id,
      TableName: certificate.TableName,
      PrimaryKey: certificate.PrimaryKey,
      Price: certificate.Price,
      Summa: certificate.Summa,
      ClientName: clientData.name,
      Phone: clientData.phone,
      Email: clientData.email,
      PaymentTypeId: 2,
      UseDelivery: 0,
      IsGift: 0,
      MsgText: '',
      PName: '',
      PPhone: '',
    });
    console.log('OSSale Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error making OSSale request:', error);
    throw error;
  }
};

export default buyCertificates;
