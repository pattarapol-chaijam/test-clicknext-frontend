import axios from './axios'
const getUser = (userId: number) => {
  return axios.get(`users/${userId}`)
}
export default { getUser }
