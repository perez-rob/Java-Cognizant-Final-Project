import ky from 'ky';

const baseUrl = 'http://localhost:7979';

// translate to ky:
// await axios.post("http://localhost:7979/charge", "", {
//     headers: {
//       token: token.id,
//       amount: 500,
//     },


const api = {

  index({ type, value }, path = "shoes") {
    return ky.get(`${baseUrl}/${path}/${type}/${value}`).json();
  },

  // index(path = "shoes") {
  //   return ky.get(`${baseUrl}/${path}`).json();
  // },

  update(payload, id, path = "shoes") {
    return ky.put(`${baseUrl}/${path}/${id}`, { json: payload });
  },

  create(payload, path = "shoes") {
    return ky.post(`${baseUrl}/${path}`, { json: payload }).json();
  },

  delete(id, path = "shoes") {
    return ky.delete(`${baseUrl}/${path}/${id}`);
  },

  newCustomer(payload, path = "customers") {
    return ky.post(`${baseUrl}/${path}`, { json: payload }).json();
  },

  updateCustomer(payload, id, path = "customers") {
    return ky.put(`${baseUrl}/${path}/${id}`, { json: payload }).json();
  },

  customerByEmail(email, path = "customers/email") {
    return ky.get(`${baseUrl}/${path}/${email}`).json();
  },

  payment(payload, path = "charge") {
    return ky.post(`${baseUrl}/${path}`, { json: payload }).json();
  },
};

export default api;