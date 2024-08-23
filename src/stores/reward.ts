import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { format, parseISO, addYears } from 'date-fns'
import { th } from 'date-fns/locale'
import rewardService from '@/services/reward'

export const useRewardStore = defineStore('Reward', () => {
  async function getRewards() {
    try {
      const res = await rewardService.getRewards()
      return res.data
    } catch (err) {
      console.log(err)
    }
  }

  async function getReward(rewardId: number) {
    try {
      const res = await rewardService.getReward(rewardId)
      return res.data
    } catch (err) {
      console.log(err)
    }
  }

  function toLocalDate(date: any, type: any) {
    if (date != undefined) {
      const ISODate = parseISO(date.toString())

      const formattedDate = ISODate.toLocaleString('th-TH', {
        year: 'numeric',
        month: type,
        day: 'numeric'
      })
      return formattedDate.replace(/(\d{1,2}:\d{2})/, '$1 น.')
    } else {
      return null
    }
  }
  return { getRewards, toLocalDate, getReward }
})
