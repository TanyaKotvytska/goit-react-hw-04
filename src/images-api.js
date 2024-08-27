import axios from "axios";

const apiKey = 'L4X7TW79IAJM06d2QKTzQuX2bT-Nyu_REv4T34nsLSQ';
const baseUrl = 'https://api.unsplash.com/';

export const fetchImagesWithTopic = async (topic, page = 1, perPage = 10) => {
    const url = `${baseUrl}?query=${encodeURIComponent(topic)}&page=${page}&per_page=${perPage}&client_id=${apiKey}`;
    const response = await axios.get(url);
    return response.data.results;
};
