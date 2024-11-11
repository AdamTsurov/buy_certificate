import React, { useEffect, useRef, useState } from 'react';
import Input from '../../../../components/ui/input/input';
import { fetchCertificates } from '../../api/get-certificates';
import ListCertificates from './certificate-list/certificate-list';

const Certificate = () => {
  const [certificates, setCertificates] = useState([]);
  useEffect(() => {
    fetchCertificates().then(result => {
      if (result) {
        console.log(result);
        setCertificates([...certificates, ...result]);
      }
    });
  }, []);

  return (
    <div className="certificate">
      <ListCertificates certificates={certificates}/>
    </div>
  );
};

export default Certificate;
