// src/api/apiPost.js
import axios from 'axios';

const API_URL = 'https://67556a5111ce847c992a0316.mockapi.io/api/test/post';

const getPosts = () => {
  return axios.get(API_URL);
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
