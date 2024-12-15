// src/api/apiPost.js
import axios from 'axios';

const API_URL = 'https://67556a5111ce847c992a0316.mockapi.io/api/test/post';
const API_LIMIT = 5;

// const getPosts = (page, id) => {
//   let params = `?page=${page}&limit=${API_LIMIT}`;
//   if (id) {
//     params += `&id=${id}`;
//   }
//   return axios.get(`${API_URL}${params}`);
// };

const getPosts = (params) => {
  params = {
    ...params,
    limit: API_LIMIT
  };
  return axios.get(API_URL, {params});
};

const postPost = (title) => {
    return axios.post(API_URL, {
        title: title
    });
};

const putPost = (id, title) => {
  return axios.put(`${API_URL}/${id}`, {
      title: title
  });
};

const deletePost = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};

export default {
  getPosts,
  postPost,
  deletePost,
  putPost
};
