import axios from 'axios'

const BASE_URL = process.env.SERVICE_URL || "http://localhost:4001"

export const fetchCustomer = (id) => {
  return axios.get(`${BASE_URL}/customer/${id}`)
    .then(response => {
      return response.data
    })
    .catch(_ => ({}))
}

export const fetchAgent = (id) => (
  axios.get(`${BASE_URL}/agent/${id}`)
    .then(response => {
      return response.data
    })
    .catch( _ => ({}))
)