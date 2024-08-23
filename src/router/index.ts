import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/reward',
      name: 'reward',
      component: () => import('../views/RewardView.vue')
    },
    {
      path: '/reward_detail/:rewardId',
      name: 'reward_detail',
      component: () => import('../views/RewardDetailView.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/ProfileView.vue')
    },
    {
      path: '/signIn',
      name: 'signIn',
      component: () => import('../views/SignInView.vue')
    }
  ]
})

export default router
