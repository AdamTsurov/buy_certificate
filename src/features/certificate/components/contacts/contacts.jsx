import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useCertificates from '../../../../hooks/useCertificates';
import ContactForm from '../../../../components/ui/form/form';
import { Container, CssBaseline } from '@mui/material';
import buyCertificates from '../../api/buy-certificate';

const Contacts = () => {
  const { certificateID } = useParams();
  const { certificates } = useCertificates();
  const navigate = useNavigate();
  const certificate = certificates?.find(item => item.ID === certificateID);

  const handleSubmit = clientData => {
    buyCertificates(certificate, clientData);
    navigate('/success-pay');
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <Container
      style={{
        backgroundColor: '#fffdf5', // Задайте здесь нужный цвет
        minHeight: '90vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      maxWidth="false" // Отключите максимальную ширину
    >
      <CssBaseline />
      <div>
        <ContactForm onSubmit={handleSubmit} onBack={handleBack} />
      </div>
    </Container>
  );
};

export default Contacts;
