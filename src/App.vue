<script setup lang="ts">
import MainHeader from './components/header/MainHeader.vue'
import { RouterView } from 'vue-router'
import BottomNavigationMenu from './components/menu/BottomNavigationMenu.vue'
import MessageDialog from './components/Dialog/MessageDialog.vue'
import { computed } from 'vue'
import router from './router'
const isLogin = computed(() => {
  return !!localStorage.getItem('access_token')
})
</script>

<template>
  <v-app style="background-color: #f4f4f4">
    <v-main>
      <RouterView />
    </v-main>
    <BottomNavigationMenu v-if="router.currentRoute.value.meta.menu" />
    <MessageDialog />
  </v-app>
</template>

<style scoped></style>
