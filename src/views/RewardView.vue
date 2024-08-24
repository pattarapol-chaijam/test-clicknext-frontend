<script setup lang="ts">
import { mdiAlphaPCircleOutline, mdiStar } from '@mdi/js'
import { useHistoryRewardStore } from '@/stores/history_reward'
import { onMounted, ref } from 'vue'
import type User from '@/types/user'
import type HistoryReward from '@/types/history_reward'
import { useAuthStore } from '@/stores/auth'
import { useUserStore } from '@/stores/user'
import { useRewardStore } from '@/stores/reward'
const userStore = useUserStore()
const historyRewardStore = useHistoryRewardStore()
const authStore = useAuthStore()
const model = ref(0)
const user = ref<User>()
const historyRewards = ref<HistoryReward[]>([])
const currentUser = ref<User>()

const rewardStore = useRewardStore()
onMounted(async () => {
  currentUser.value = await authStore.getCurrentUser()
  user.value = await userStore.getUser(currentUser.value!.userId)
  historyRewards.value = await historyRewardStore.getHistoryReward(currentUser.value!.userId)
  console.log(historyRewards.value)
})
</script>

<template>
  <v-card style="background-color: #5004ec; max-height: 160px; margin-top: -15px" rounded="xl"
    ><v-img src="https://demo-point-insurance.clicknext.com/images/bg-01.svg">
      <v-container fluid>
        <v-row>
          <v-col align="center"
            ><div class="mt-8 ml-2" style="color: white; font-size: 25px; font-weight: bold">
              รายละเอียดพอยท์
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-img></v-card
  >
  <v-container fluid style="margin-top: -60px">
    <v-row>
      <v-col cols="4" align="center">
        <v-card
          class="ml-2"
          style="background-color: white; height: 140px; width: 100%"
          rounded="xl"
          :elevation="0"
        >
          <v-img
            class="mt-2"
            width="55"
            height="55"
            src="https://www.svgrepo.com/show/530239/schedule.svg"
          ></v-img>
          <v-list-item-title style="font-size: small">คะแนนใกล้หมดอายุ</v-list-item-title>
          <v-list-item-title style="font-size: medium; font-weight: bold"
            >610 คะแนน</v-list-item-title
          >
          <v-list-item-title style="font-size: small">หมดอายุ: 30 ก.ย. 2568</v-list-item-title>
        </v-card></v-col
      >
      <v-col cols="4" align="center">
        <v-card
          class="ml-1"
          style="background-color: white; height: 140px; width: 100%"
          rounded="xl"
          :elevation="0"
        >
          <v-img
            class="mt-2"
            width="55"
            height="55"
            src="https://www.svgrepo.com/show/530240/coupons.svg"
          ></v-img>

          <v-list-item-title style="font-size: medium; font-weight: bold"
            >ประวัติ</v-list-item-title
          >
          <v-list-item-title style="font-size: small">ตรวจสอบประวัติด้านล่าง</v-list-item-title>
        </v-card></v-col
      >
      <v-col cols="4" align="center">
        <v-card
          style="background-color: white; height: 140px; width: 100%"
          rounded="xl"
          :elevation="0"
        >
          <v-img
            class="mt-2"
            width="55"
            height="55"
            src="https://www.svgrepo.com/show/530249/savings.svg "
          ></v-img>
          <v-list-item-title style="font-size: medium">รับคะแนนเพิ่ม</v-list-item-title>
          <v-list-item-title style="font-size: small; font-weight: bold"
            >ทุกๆ 100฿ รับ 10 คะแนน
          </v-list-item-title>
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
      ><v-col align="end"
        ><a href="" class="clickable-text" style="font-size: small; color: rgb(43, 102, 211)">
          See All
        </a></v-col
      >
    </v-row>

    <v-sheet class="mx-auto" elevation="0" width="100%" style="background-color: #f4f4f4">
      <v-slide-group v-model="model" class="py-5" show-arrows>
        <v-slide-group-item
          v-for="historyReward in historyRewards"
          :key="historyReward.historyRewardId"
        >
          <v-card
            style="background-color: white"
            class="ml-5"
            rounded="xl"
            :elevation="0"
            width="260"
            height="300"
            align="start"
          >
            <v-img :src="historyReward.rewards.rewardImg" cover height="200px">
              <v-card
                style="
                  background-color: #da4453;
                  font-weight: bold;
                  font-size: 12px;
                  color: white;
                  border: 1px solid white;
                "
                class="mt-2 pt-1 pl-2"
                width="80px"
                height="30px"
                >Hot Deals!</v-card
              >
            </v-img>
            <v-list-item-subtitle style="font-size: 11px" class="ml-2 mt-2">
              {{ historyReward.rewards?.rewardDescription }}
            </v-list-item-subtitle>
            <v-list-item-title style="font-size: medium; font-weight: bold" class="ml-2 mt-7">
              <v-icon color="rgb(43, 102, 211)">
                {{ mdiAlphaPCircleOutline }}
              </v-icon>
              <span style="font-size: small; font-weight: lighter; color: #5004ec" class="ml-1">
                {{ historyReward.rewards?.rewardPaypoint }} คะแนน
              </span>
            </v-list-item-title>
            <v-list-item-subtitle style="font-size: x-small" class="ml-3">
              วันที่แลก {{ rewardStore.toLocalDate(historyReward.rewards?.rewardEndDate, 'short') }}
              <v-icon style="margin-left: 116px" size="20" color="#f4bd4c">
                {{ mdiStar }}
              </v-icon>
            </v-list-item-subtitle>
          </v-card>
        </v-slide-group-item>
      </v-slide-group>
    </v-sheet>
  </v-container>
</template>
