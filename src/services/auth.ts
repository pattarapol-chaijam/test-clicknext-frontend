import axios from './axios'
const signIn = (userUsername: string, userPassword: string) => {
  return axios.post('auth/signIn', { username: userUsername, password: userPassword })
}
export default { signIn }
