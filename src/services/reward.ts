import axios from './axios'
const getrewards = () => {
  return axios.get(`rewards`)
}
export default { getrewards }
