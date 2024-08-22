<script setup lang="ts">
import { mdiHomeOutline, mdiStarOutline, mdiAccountOutline } from '@mdi/js'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const value = ref(0)
const router = useRouter()
</script>
<template>
  <v-container class="mt-5">
    <v-bottom-navigation
      grow
      v-model="value"
      color="teal"
      style="
        background-color: #e4ecff;
        border-radius: 15px;
        width: 90%;
        height: 8%;
        margin-left: 5%;
        margin-bottom: 1%;
      "
      :elevation="1"
    >
      <v-btn
        :value="0"
        :style="
          value === 0
            ? 'background-color: #4b21ef; color: white; border-radius: 50px; height:60px ; max-width: 120px; margin-top:10px '
            : 'color: #4b21ef'
        "
        @click="router.push('/'), (value = 0)"
        class="d-flex flex-column align-center justify-center"
      >
        <v-icon size="24px" :color="value === 0 ? 'lightgreen' : ''" class="mb-1">
          {{ mdiHomeOutline }}
        </v-icon>
        <span
          :style="
            value === 0
              ? 'font-size: small; font-weight: 900; color: white;'
              : 'font-size: small; font-weight: 900;'
          "
        >
          หน้าหลัก
        </span>
      </v-btn>

      <v-btn
        :value="1"
        :style="
          value === 1
            ? 'background-color: #4b21ef; color: white; border-radius: 50px; height:60px ; max-width: 120px; margin-top:10px '
            : 'color: #4b21ef'
        "
        @click="router.push('/reward'), (value = 1)"
        class="d-flex flex-column align-center justify-center"
      >
        <v-icon size="24px" :color="value === 1 ? 'lightgreen' : ''" class="mb-1">
          {{ mdiStarOutline }}
        </v-icon>
        <span
          :style="
            value === 1
              ? 'font-size: small; font-weight: 900; color: white;'
              : 'font-size: small; font-weight: 900;'
          "
        >
          สะสมพอยท์
        </span>
      </v-btn>

      <v-btn
        :value="2"
        :style="
          value === 2
            ? 'background-color: #4b21ef; color: white; border-radius: 50px; height:60px ;max-width: 120px; margin-top:10px '
            : 'color: #4b21ef'
        "
        @click="router.push('/profile'), (value = 2)"
        class="d-flex flex-column align-center justify-center"
      >
        <v-icon size="24px" :color="value === 2 ? 'lightgreen' : ''" class="mb-1">
          {{ mdiAccountOutline }}
        </v-icon>
        <span
          :style="
            value === 2
              ? 'font-size: small; font-weight: 900; color: white;'
              : 'font-size: small; font-weight: 900;'
          "
        >
          บัญชี
        </span>
      </v-btn>
    </v-bottom-navigation>
  </v-container>
</template>
