import axios from 'axios';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ListCertificates from '../features/certificate/components/certificate-list';

const App = () => {
  const API_URL = '/service/api/api';
  const API_KEY = '011ba11bdcad4fa396660c2ec447ef14';

  const fetchCertificates = async () => {
    try {
      const response = await axios.post(API_URL, {
        ApiKey: API_KEY,
        MethodName: 'OSGetGoodList',
				ID: "5"
      });

      if (response.data.result === 0) {
        console.log(response.data.data);
      } else {
        console.error(response.data.resultdescription);
      }
    } catch (error) {
      console.error('Ошибка при получении сертификатов:', error);
    }
  };
  return (
      <div className='app'>
				<Routes>
					<Route path="/" element={<ListCertificates/>}/>
					<Route />
					<Route/>
					<Route path="*" element={}/>
				</Routes>
			</div>
  );
};

export default App;
