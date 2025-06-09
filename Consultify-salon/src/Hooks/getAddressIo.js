import { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const useGetAddressIO = () => {
  const [addressData, setAddressData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getAddress = async (postcode) => {
    try {
      setLoading(true);
      // const response = await axios.get(
      //   `https://api.getAddress.io/find/${postcode}?api-key=ueCcfQKEGEKvm7B03ls5lA36743&expand=true`
      // );
      const response = await axios.get(
        `https://api.getAddress.io/find/${postcode}?api-key=90BzkoVB-UGZQBECvAil-A36743&expand=true`
      );
      console.log(response,"response");
      setAddressData(response.data);
      setError(null);
    } catch (err) {
      toast.error("No address found, please try again")
      setAddressData(null);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { addressData, error, loading, getAddress };
};

export default useGetAddressIO;