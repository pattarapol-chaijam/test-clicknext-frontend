import axios from './axios'
const getRewards = () => {
  return axios.get(`rewards`)
}
const getReward = (rewardId: number) => {
  return axios.get(`rewards/${rewardId}`)
}
export default { getRewards, getReward }
