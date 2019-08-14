import axios from 'axios'

const api = axios.create({
  baseURL: 'https://backend-tindev-fscherer.herokuapp.com'
})

export default api;