import axios from 'axios'

const BASE_URL = process.env.SERVICE_URL || "http://localhost:4001"

const get = (url) => (
  axios.get(url)
    .then(response => {
      return response.data
    })
    .catch(_ => ({}))
)

export const fetchCustomer = (id) => (
  get(`${BASE_URL}/customers/${id}`)
)

export const fetchAgent = (id) => (
  get(`${BASE_URL}/agents/${id}`)
)

export const fetchProduct = (id) => (
  get(`${BASE_URL}/products/${id}`)
)

export const fetchProductSizes = (category) => (
  get(`${BASE_URL}/categories/${category}/sizes`)
)

export const fetchProductColors = (category) => (
  get(`${BASE_URL}/categories/${category}/colors`)
)