import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'
import { jwtDecode } from 'jwt-decode'
import authService from '@/services/auth'
import type User from '@/types/user'
import { useMessageStore } from './message'
import router from '@/router'
export const useAuthStore = defineStore('auth', () => {
  const isLoggedIn = () => {
    return !!localStorage.getItem('access_token')
  }

  const messageStore = useMessageStore()
  const getCurrentUser = async () => {
    const token = localStorage.getItem('access_token')
    if (!token) {
      return
    }
    const decode: any = jwtDecode(token)
    const user: User = decode.sub
    return user
  }

  const signIn = async (userUsername: string, userPassword: string) => {
    try {
      const response = await authService.signIn(userUsername, userPassword)
      localStorage.setItem('access_token', response.data.access_token)
      router.push('/')
    } catch (err) {
      messageStore.showError('Username หรือ Password ไม่ถูกต้อง')
    }
  }

  const signOut = () => {
    localStorage.removeItem('access_token')
    router.push('/signIn')
  }

  return {
    signIn,
    getCurrentUser,
    isLoggedIn,
    signOut
  }
})
