import axios from 'axios';

export async function getAll() {
  const response = await axios.get('http://localhost:3000/api/comments') 
    .then((response) => response.data)
  return response
}

export async function create(comment) {
  await axios.post('http://localhost:3000/api/comments', { comment }) 
}

export async function listen(comment) {
  await axios.post('http://localhost:3000/read', { text: comment }) 
}

export async function exclude(comment) {
  await axios.delete('http://localhost:3000/api/comments', { data: { text: comment } }) 
}