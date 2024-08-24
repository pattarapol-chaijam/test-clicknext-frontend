import axios from './axios'
import type HistoryReward from '@/types/history_reward'
const getHistoryRewards = () => {
  return axios.get(`history-reward`)
}

const getHistoryReward = (userId: number) => {
  return axios.get(`history-reward/${userId}`)
}

const getHistory = (userId: number, rewardId: number) => {
  return axios.get(`history-reward/${userId}/${rewardId}`)
}

function saveHistoryRewards(historyReward: any) {
  return axios.post('/history-reward', historyReward)
}

export default { getHistoryRewards, saveHistoryRewards, getHistoryReward, getHistory }
