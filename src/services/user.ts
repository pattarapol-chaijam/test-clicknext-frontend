import axios from './axios'
const getuser = (userId: number) => {
  return axios.get(`users/${userId}`)
}
export default { getuser }
