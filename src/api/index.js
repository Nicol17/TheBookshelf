import axios from 'axios';

const url = 'https://thebookshelf-crudproject.herokuapp.com/posts';

export const fetchBooks = () => axios.get(url);
export const createBook = (newBook) => axios.post(url, newBook);
export const updateBook = (id, updatedBook) => axios.patch(`${url}/${id}`, updatedBook);
export const deleteBook = (id) => axios.delete(`${url}/${id}`);