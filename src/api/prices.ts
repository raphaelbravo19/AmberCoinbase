import axios from '~config';

export const fetchPrice = async (id: string) => {
  const res = await axios.get(`/prices/${id}/spot`);
  return parseFloat(res.data.data.amount);
};
