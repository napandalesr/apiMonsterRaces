import httpClient from '../httpClient';

const getAll = async() => {
  return await httpClient.get(`${process.env.REACT_APP_API_HOST}/races`);
};

export {
  getAll
};