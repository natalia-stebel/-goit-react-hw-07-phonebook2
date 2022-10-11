import axios from 'axios';

const BASE_URL = 'https://633c5eb174afaef16407feaa.mockapi.io/';

export async function getItems() {
  return await axios.get(`${BASE_URL}contacts/`);
}

export async function addItems() {
  return await axios.post(`${BASE_URL}/contacts`);
}

export async function deleteItems(id) {
  return await axios.delete(`${BASE_URL}contacts/${id}`);
}
