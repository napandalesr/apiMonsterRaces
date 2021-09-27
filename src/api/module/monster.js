import httpClient from '../httpClient';

const getAll = async() => {
  return await httpClient.get(`${process.env.REACT_APP_API_HOST}/monsters`);
};

const get = async(name) => {
  return await httpClient.get(`${process.env.REACT_APP_API_HOST}/${name}`);
};

export {
  getAll,
  get
};