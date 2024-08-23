<script setup lang="ts">
import { mdiHomeOutline, mdiStarOutline, mdiAccountOutline } from '@mdi/js'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const active = ref('home')
const router = useRouter()
</script>
<template>
  <v-container class="mt-5">
    <v-bottom-navigation
      grow
      v-model="active"
      class="custom-bottom-navigation"
      color="teal"
      style="
        background-color: #e4ecff;
        border-radius: 15px;
        width: 94%;
        height: 8%;
        margin-left: 3%;
        margin-bottom: 1%;
      "
      :elevation="0"
    >
      <v-btn
        :to="{ name: 'home' }"
        value="home"
        :class="{ 'active-button': active === 'home' }"
        rounded
        class="custom-button"
      >
        <v-icon :color="active === 'home' ? '#14cb80' : ''" size="30">
          {{ mdiHomeOutline }}
        </v-icon>
        <span> หน้าหลัก </span>
      </v-btn>

      <v-btn
        value="reward"
        :to="{ name: 'reward' }"
        :class="{ 'active-button': active === 'reward' }"
        rounded
        class="custom-button"
      >
        <v-icon :color="active === 'reward' ? '#14cb80' : ''" size="30">
          {{ mdiStarOutline }}
        </v-icon>
        <span> สะสมพอยท์ </span>
      </v-btn>

      <v-btn
        value="profile"
        :to="{ name: 'profile' }"
        :class="{ 'active-button': active === 'profile' }"
        rounded
        class="custom-button"
      >
        <v-icon :color="active === 'profile' ? '#14cb80' : ''" size="30">{{
          mdiAccountOutline
        }}</v-icon>
        <span>บัญชี</span>
      </v-btn>
    </v-bottom-navigation>
  </v-container>
</template>
<style scoped>
.custom-bottom-navigation {
  padding: 5px;
}

.custom-button {
  border-radius: 50px !important;
  margin: 0 10px;
  width: 50px;
  height: 50px;
  padding: 10px;
  color: #4b21ef;
}

.active-button {
  background-color: #4b21ef !important;
  color: white !important;
  border-radius: 50px !important;
}

.active-button span {
  color: white !important;
}
</style>
