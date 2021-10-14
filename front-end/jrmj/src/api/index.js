import ky from 'ky';

const baseUrl = 'http://localhost:7979';


const api = {
  index(path = "shoes") {
    return ky.get(`${baseUrl}/${path}`).json();
  },

  update(payload, id, path = "shoes") {
    return ky.put(`${baseUrl}/${path}/${id}`, { json: payload });
  },

  create(payload, path = "shoes") {
    return ky.post(`${baseUrl}/${path}`, { json: payload }).json();
  },

  delete(id ,path = "shoes") {
    return ky.delete(`${baseUrl}/${path}/${id}`);
  },

  newCustomer(payload, path = "customers") {
    return ky.post(`${baseUrl}/${path}`, { json: payload }).json();
  },

  payment(payload, path = "payment"){
    return ky.post(`${baseUrl}/${path}`, { json: payload }).json();

  }
};

export default api;