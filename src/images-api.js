import axios from "axios";

const apiKey = 'L4X7TW79IAJM06d2QKTzQuX2bT-Nyu_REv4T34nsLSQ';
const baseUrl = 'https://api.unsplash.com/search/photos';

export const fetchImages = async (query, page = 1) => {
  const response = await axios.get(baseUrl, {
    params: {
      query,
      page,
      per_page: 12,
      client_id: apiKey,
    },
  });
  return response.data;
};