// https://648a151e5fa58521cab0c442.mockapi.io

import axios from 'axios';

export const getCars = async () => {
  const { data } = await axios.get(
    'https://648a151e5fa58521cab0c442.mockapi.io/cars'
  );

  return data;
};
