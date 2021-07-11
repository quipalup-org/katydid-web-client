import api from './api';

export const getChildrenList = async () => {
  const res = await api.get('/children');
  return res.data;
};

export const getChildLogEntries = async childId => {
  const res = await api.get('/log-entries', {
    params: {
      filter: {
        childId
      }
    }
  });
  return res.data;
};
