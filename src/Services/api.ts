import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

export const fetchTasks = userId =>
  axios.get(`${API_URL}/todos?userId=${userId}`);

export const updateTask = (id, completed) =>
  axios.put(`${API_URL}/todos/${id}`, {completed});

export const addTask = title =>
  axios.post(`${API_URL}/todos`, {title, completed: false});
