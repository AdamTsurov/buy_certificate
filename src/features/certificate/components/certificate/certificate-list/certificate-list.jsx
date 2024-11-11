import React from 'react';
import CertificateItem from '../certificate-item/certificate-item';

const ListCertificates = ({ certificates }) => {
  return (
    <div className="certificates-list">
      {certificates.map((certificate, index) => {
        return (
          <CertificateItem
            key={certificate.ID}
            index={index + 1}
            name={certificate.NAME}
            description={certificate.DESCRIPTION}
            price={certificate.PRICE}
            discount={certificate.DISCOUNT}
            image={certificate.IMAGEURL}
          />
        );
      })}
    </div>
  );
};

export default ListCertificates;
