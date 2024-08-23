import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { requiresAuth: true, menu: true },
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/reward',
      name: 'reward',
      meta: { requiresAuth: true, menu: true },
      component: () => import('../views/RewardView.vue')
    },
    {
      path: '/reward_detail/:rewardId',
      name: 'reward_detail',
      meta: { requiresAuth: true },
      component: () => import('../views/RewardDetailView.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      meta: { requiresAuth: true, menu: true },
      component: () => import('../views/ProfileView.vue')
    },
    {
      path: '/',
      redirect: '/signIn'
    },
    {
      path: '/signIn',
      name: 'signIn',
      component: () => import('../views/SignInView.vue')
    }
  ]
})
router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('access_token')
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!isAuthenticated) {
      next({ name: 'signIn' })
    } else {
      next()
    }
  } else {
    next()
  }
})
export default router
