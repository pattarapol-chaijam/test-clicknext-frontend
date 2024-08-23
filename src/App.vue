<script setup lang="ts">
import MainHeader from './components/header/MainHeader.vue'
import { RouterView } from 'vue-router'
import BottomNavigationMenu from './components/menu/BottomNavigationMenu.vue'
import MessageDialog from './components/Dialog/MessageDialog.vue'
</script>

<template>
  <v-app style="background-color: #f4f4f4">
    <v-main>
      <RouterView />
    </v-main>
    <BottomNavigationMenu />
    <MessageDialog />
  </v-app>
</template>

<style scoped></style>
