import React, { useState } from 'react';
import Button from '../../../../../components/ui/button/button';
import { calculateDiscount } from '../../../../../utils/calculateDiscount';

const CertificateItem = ({
  index,
  name,
  description,
  price,
  discount,
  image,
}) => {
	const [buyComplete, setBuyComplete] = useState();

  const handleBuyCertificate = () => {
		
	};

  return (
    <div className="certificate-item">
      <div className="image-certificate">
        <img src={image} alt={name} />
      </div>
      <div className="information-certificate">
        <p className="certificate-name">Название: {name}</p>
        <div className="certificate-description">
          Описание: <p className="description">{description}</p>
        </div>
        <div className="certificate-summ">
          <p>Скидка: {discount} %</p>
          <div className="summ">
            <p className="price">Цена: {price}</p>
            <p className="summ-with-discount">
              Цена, со скидкой: {calculateDiscount(price, discount)}
            </p>
          </div>
          <Button
            className="certificate-buy-button"
            type="button"
            onClick={() => handleBuyCertificate()}
          >
            Купить
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CertificateItem;
