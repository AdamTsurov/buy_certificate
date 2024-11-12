import { useEffect, useState } from 'react';
import fetchCertificates from '../features/certificate/api/get-certificates';

const useCertificates = () => {
  const [certificates, setCertificates] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadCertificates = async () => {
      try {
        const result = await fetchCertificates();
        setCertificates(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadCertificates();
  }, []);

  return { certificates, loading, error };
};

export default useCertificates;
