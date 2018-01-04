import axios from 'axios'

const fetchCustomer = (id) => (
  axios.get(`http://localhost:4001/customer/${id}`)
    .then(response => {
      return response.data
    })
    .catch( _ => ({}))
)

export default fetchCustomer