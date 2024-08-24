import { defineStore } from 'pinia'

import userService from '@/services/user'
import type User from '@/types/user'
import { ref } from 'vue'
export const useUserStore = defineStore('User', () => {
  async function getUser(userId: number) {
    try {
      const res = await userService.getUser(userId)
      return res.data
    } catch (err) {
      console.log(err)
    }
  }

  async function update(user: User) {
    try {
      const res = await userService.update(user)
      return res.data
    } catch (error) {
      console.log(error)
    }
  }

  return { getUser, update }
})
