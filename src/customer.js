import axios from 'axios'

export default class Customer {
  constructor(id) {
    this.id = id
  }

  initialize = () => {
    return axios.get(`http://localhost:4001/customer/${this.id}`)
      .then(response => {
        this.name = response.data.name
        this.agentId = response.data.agentId
      })
      .catch( _ => ({}))
  }
}