<script setup lang="ts">
import { useMessageStore } from '@/stores/message'

const messageStore = useMessageStore()
</script>
<template>
  <v-snackbar v-model="messageStore.isShow" multi-line rounded="xl">
    <!-- <v-icon size="32" color="red">mdi-alert-box-outline</v-icon> -->
    {{ messageStore.message }}

    <template v-slot:actions>
      <v-btn color="red" variant="text" @click="messageStore.isShow = false"> Close </v-btn>
    </template>
  </v-snackbar>
</template>
