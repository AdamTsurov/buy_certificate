import axios from 'axios';

const API_KEY = '011ba11bdcad4fa396660c2ec447ef14';
const API_URL = '/service/api/api';

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
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default buyCertificates;
