import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { format, parseISO, addYears } from 'date-fns'
import { th } from 'date-fns/locale'
import historyRewardService from '@/services/history_reward'
import type Reward from '@/types/reward'
import type HistoryReward from '@/types/history_reward'

export const useHistoryRewardStore = defineStore('HistoryReward', () => {
  async function getHistoryReward(userId: number) {
    try {
      const res = await historyRewardService.getHistoryReward(userId)
      return res.data
    } catch (err) {
      console.log(err)
    }
  }

  async function getHistory(userId: number, rewardId: number) {
    try {
      const res = await historyRewardService.getHistory(userId, rewardId)
      return res.data
    } catch (err) {
      console.log(err)
    }
  }

  return { getHistoryReward, getHistory }
})
