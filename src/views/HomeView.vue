<script setup lang="ts">
import { mdiAlphaPCircleOutline, mdiStar } from '@mdi/js'
import { useUserStore } from '@/stores/user'
import { useRewardStore } from '@/stores/reward'
import { onMounted, ref } from 'vue'
import type User from '@/types/user'
import type Reward from '@/types/reward'
const userStore = useUserStore()
const rewardStore = useRewardStore()
const users = ref<User>()
const rewards = ref<Reward[]>()
const userId = ref(2)
onMounted(async () => {
  users.value = await userStore.getUser(userId.value)
  rewards.value = await rewardStore.getRewards()
})
</script>

<template>
  <v-card style="background-color: #5004ec; max-height: 160px; margin-top: -15px" rounded="xl"
    ><v-img src="https://demo-point-insurance.clicknext.com/images/bg-01.svg">
      <v-container fluid>
        <v-row>
          <v-avatar
            class="mt-9 ml-8"
            size="60"
            color="#efeff1"
            style="border: 4px solid #0f5d84"
            title="ยินดีต้อนรับ"
          ></v-avatar>
          <v-col
            ><div class="mt-8 ml-2" style="color: white; font-size: small">ยินดีต้อนรับ</div>
            <div class="ml-2" style="color: white">{{ users?.userName }}</div></v-col
          >
        </v-row>
      </v-container>
    </v-img></v-card
  ><v-container style="margin-top: -60px" fluid align="center">
    <v-card style="background-color: white; height: 120px; width: 99%" rounded="xl" :elevation="0">
      <v-row>
        <v-col class="ml-5" align="start">
          <v-img
            width="70"
            height="70"
            src="https://demo-point-insurance.clicknext.com/images/badge_champion.svg"
          ></v-img
        ></v-col>
        <v-col align="end" class="pr-7 pt-9">
          <span style="font-size: 22px; font-weight: bold">{{ users?.userPoint }} </span
          ><span> คะแนน</span>
        </v-col>
      </v-row>
      <v-row align="center" style="margin-top: -17px">
        <v-col class="ml-6 mr-7">
          <v-progress-linear bg-color="dark-blue" color="teal" model-value="50" height="8" rounded>
          </v-progress-linear>

          <v-list-item-subtitle class="subtitle-text justify-center mt-3" style="font-size: 11px">
            <span>
              <v-img
                width="15"
                height="15"
                src="https://demo-point-insurance.clicknext.com/images/run-1.svg"
                class="mr-1"
              ></v-img></span
            ><span>Burn อีก 300 kcal เพื่อเลื่อนระดับเป็น</span>
            <span>
              <v-img
                width="15"
                height="15"
                src="https://demo-point-insurance.clicknext.com/images/star-1.svg"
                class="mr-1 ml-1"
              ></v-img></span
            ><span> Elite</span>
          </v-list-item-subtitle>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
  <v-container fluid style="margin-top: -10px">
    <v-row>
      <v-col cols="4" align="center">
        <v-card
          class="ml-2"
          style="background-color: white; height: 120px; width: 100%"
          rounded="xl"
          :elevation="0"
        >
          <v-img
            class="mt-2"
            width="55"
            height="55"
            src="https://demo-point-insurance.clicknext.com/images/wired-flat-646-walking-walkcycle-person-2.gif"
          ></v-img>
          <v-list-item-title style="font-size: small">Step Count</v-list-item-title>
          <v-list-item-title style="font-size: medium; font-weight: bold">6,210</v-list-item-title>
        </v-card></v-col
      >
      <v-col cols="4" align="center">
        <v-card
          class="ml-1"
          style="background-color: white; height: 120px; width: 100%"
          rounded="xl"
          :elevation="0"
        >
          <v-img
            class="mt-2"
            width="55"
            height="55"
            src="https://demo-point-insurance.clicknext.com/images/icn_kcal.svg"
          ></v-img>
          <v-list-item-title style="font-size: small">Burn</v-list-item-title>
          <v-list-item-title style="font-size: medium; font-weight: bold"
            >320 Kcal</v-list-item-title
          >
        </v-card></v-col
      >
      <v-col cols="4" align="center">
        <v-card
          style="background-color: white; height: 120px; width: 99%"
          rounded="xl"
          :elevation="0"
        >
          <v-img
            class="mt-2"
            width="55"
            height="55"
            src="https://demo-point-insurance.clicknext.com/images/wired-outline-1249-heart-beat-2.gif"
          ></v-img>
          <v-list-item-title style="font-size: small">Heart Rate</v-list-item-title>
          <v-list-item-title style="font-size: medium; font-weight: bold"
            >110 BPM</v-list-item-title
          >
        </v-card></v-col
      >
    </v-row>
  </v-container>
  <v-container fluid>
    <v-row>
      <v-col
        ><v-list-item-title
          style="font-size: 20px; font-weight: bold; margin-top: -10px"
          class="ml-2"
          >For you</v-list-item-title
        ></v-col
      ><v-col align="end"><a href="https://example.com" class="clickable-text"> See All </a></v-col>
    </v-row>
    <v-row style="margin-top: -10px">
      <v-col v-for="reward in rewards" :key="reward.rewardId" cols="auto">
        <v-card
          style="background-color: white"
          rounded="xl"
          :elevation="0"
          width="260"
          height="300"
        >
          <v-img :src="reward.rewardImg" cover height="200px"></v-img>
          <v-list-item-subtitle style="font-size: 11px" class="ml-2 mt-2">{{
            reward.rewardDescription
          }}</v-list-item-subtitle>
          <v-list-item-title style="font-size: medium; font-weight: bold" class="ml-2 mt-7"
            ><v-icon color="rgb(43, 102, 211)">{{ mdiAlphaPCircleOutline }}</v-icon
            ><span style="font-size: small; font-weight: lighter; color: #5004ec" class="ml-1"
              >{{ reward.rewardPaypoint }} คะแนน</span
            ></v-list-item-title
          ><v-list-item-subtitle style="font-size: x-small" class="ml-3"
            >หมดอายุ {{ rewardStore.toLocalDate(reward.rewardEndDate, 'short') }}
            <v-icon style="margin-left: 125px" size="20" color="#f4bd4c">{{
              mdiStar
            }}</v-icon></v-list-item-subtitle
          >
        </v-card></v-col
      >
    </v-row>
  </v-container>
  <v-container fluid>
    <v-row>
      <v-col
        ><v-list-item-title
          style="font-size: 20px; font-weight: bold; margin-top: -10px"
          class="ml-2"
          >Hot Deals!</v-list-item-title
        ></v-col
      ><v-col align="end"><a href="https://example.com" class="clickable-text"> See All </a></v-col>
    </v-row>
    <v-row style="margin-top: -10px">
      <v-col v-for="reward in rewards" :key="reward.rewardId" cols="auto">
        <v-card
          style="background-color: white"
          rounded="xl"
          :elevation="0"
          width="260"
          height="300"
        >
          <v-img :src="reward.rewardImg" cover height="200px">
            <v-card
              style="
                background-color: #da4453;
                font-weight: bold;
                font-size: 11px;
                color: white;
                border: 1px solid white;
              "
              class="mt-2 pt-1 pl-1"
              width="70px"
              height="27px"
              >Hot Deals!</v-card
            >
          </v-img>
          <v-list-item-subtitle style="font-size: 11px" class="ml-2 mt-2">{{
            reward.rewardDescription
          }}</v-list-item-subtitle>
          <v-list-item-title style="font-size: medium; font-weight: bold" class="ml-2 mt-7"
            ><v-icon color="rgb(43, 102, 211)">{{ mdiAlphaPCircleOutline }}</v-icon
            ><span style="font-size: small; font-weight: lighter; color: #5004ec" class="ml-1"
              >{{ reward.rewardPaypoint }} คะแนน</span
            ></v-list-item-title
          ><v-list-item-subtitle style="font-size: x-small" class="ml-3"
            >หมดอายุ {{ rewardStore.toLocalDate(reward.rewardEndDate, 'short') }}
            <v-icon style="margin-left: 125px" size="20" color="#f4bd4c">{{
              mdiStar
            }}</v-icon></v-list-item-subtitle
          >
        </v-card></v-col
      >
    </v-row>
  </v-container>
</template>
<style>
.subtitle-text {
  display: flex;
}
.clickable-text {
  font-size: small;
  color: rgb(43, 102, 211);
  text-decoration: none;
}
</style>
