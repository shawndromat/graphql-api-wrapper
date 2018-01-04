import axios from 'axios'

export const fetchCustomer = (id) => (
  axios.get(`http://localhost:4001/customer/${id}`)
    .then(response => {
      return response.data
    })
    .catch( _ => ({}))
)

export const fetchAgent = (id) => (
  axios.get(`http://localhost:4001/agent/${id}`)
    .then(response => {
      return response.data
    })
    .catch( _ => ({}))
)