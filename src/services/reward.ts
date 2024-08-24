import type Reward from '@/types/reward'
import axios from './axios'
const getRewards = () => {
  return axios.get(`rewards`)
}
const getReward = (rewardId: number) => {
  return axios.get(`rewards/${rewardId}`)
}
const update = (reward: Reward) => {
  return axios.patch(`rewards/${reward.rewardId}`, reward)
}
export default { getRewards, getReward, update }
