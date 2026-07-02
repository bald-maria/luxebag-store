import axios from 'axios'

const localApi = axios.create({
  baseURL: 'http://localhost:3001',
})

export const getProducts = () => localApi.get('/products')
export const getProductById = (id) => localApi.get(`/products/${id}`)
