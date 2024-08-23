import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import userService from '@/services/user'

export const useUserStore = defineStore('User', () => {
  async function getUser(userId: number) {
    try {
      const res = await userService.getuser(userId)
      return res.data
    } catch (err) {
      console.log(err)
    }
  }

  return { getUser }
})
