import api from './api';

export const getChildrenList = async () => {
  const res = await api.get('/children');
  return res.data;
};
