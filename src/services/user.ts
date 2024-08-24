import type User from '@/types/user'
import axios from './axios'
const getUser = (userId: number) => {
  return axios.get(`users/${userId}`)
}

const update = (user: User) => {
  return axios.patch(`users/${user.userId}`, user)
}
export default { getUser, update }
