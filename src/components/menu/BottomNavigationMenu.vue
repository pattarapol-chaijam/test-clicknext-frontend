<script setup lang="ts">
import { mdiHomeOutline, mdiStarOutline, mdiAccountOutline } from '@mdi/js'
</script>
<template>
  <v-bottom-navigation grow color="#6F4E37" style="background-color: #efeff1" :elevation="3">
    <v-btn value="recent">
      <v-icon>{{ mdiHomeOutline }}</v-icon>

      <span>Home</span>
    </v-btn>

    <v-btn value="favorites">
      <v-icon>{{ mdiStarOutline }}</v-icon>

      <span>Reward</span>
    </v-btn>

    <v-btn value="nearby">
      <v-icon>{{ mdiAccountOutline }}</v-icon>

      <span>Profile</span>
    </v-btn>
  </v-bottom-navigation>
</template>
