import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Head from '../components/seo/head';
import Certificate from '../features/certificate/components/certificate/certificate';
import Contacts from '../features/certificate/components/contacts/contacts';
import Payment from '../features/certificate/components/payment/payment';
import NotFound from './routes/not-found';

const App = () => {
  return (
    <div className="app">
      <Head title={'Certificates'} />
      <div className='main'>
        <Routes>
          <Route path="/" element={<Certificate />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/success-pay" element={<Payment />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
