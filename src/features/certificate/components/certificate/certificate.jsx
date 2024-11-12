import React, { useEffect, useRef, useState } from 'react';
import Input from '../../../../components/ui/input/input';
import fetchCertificates from '../../api/get-certificates';
import ListCertificates from './certificate-list/certificate-list';
import useCertificates from '../../../../hooks/useCertificates';

const Certificate = () => {
  const { certificates } = useCertificates();

  return (
    <div className="certificate">
      <ListCertificates certificates={certificates} />
    </div>
  );
};

export default Certificate;
