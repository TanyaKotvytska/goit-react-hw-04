import axios from "axios";

// axios.defaults.baseURL = "https://api.unsplash.com/photos/?client_id=L4X7TW79IAJM06d2QKTzQuX2bT-Nyu_REv4T34nsLSQ";

// export const fetchImagesWithTopic = async topic => {
//     const response = await axios.get(`/search?query=${topic}`);
//     return response.data.hits;
// };

const apiKey = 'L4X7TW79IAJM06d2QKTzQuX2bT-Nyu_REv4T34nsLSQ';
const baseUrl = 'https://api.unsplash.com/';

export const fetchImagesWithTopic = async topic => {
    const url = `${baseUrl}?key=${apiKey}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`;
    const response = await axios.get(`/search?query=${url}`);
    return response.data.hits;
};