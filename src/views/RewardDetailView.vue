<script setup lang="ts">
import router from '@/router'
import type Reward from '@/types/reward'
import { mdiKeyboardBackspace, mdiAlphaPCircleOutline } from '@mdi/js'
import { onMounted, ref } from 'vue'
import { useRewardStore } from '@/stores/reward'
const reward = ref<Reward>()
const rewardStore = useRewardStore()
const back = () => {
  router.push({ name: 'home' })
}
const rewardId = router.currentRoute.value.params.rewardId.toString()
onMounted(async () => {
  reward.value = await rewardStore.getReward(+rewardId)
  console.log(reward.value)
})
</script>

<template>
  <v-app-bar style="height: 8%" :elevation="0">
    <v-btn class="mt-3" @click="back"
      ><v-icon size="30">{{ mdiKeyboardBackspace }}</v-icon></v-btn
    >
    <v-list-item-title style="font-size: 20px; font-weight: bold" class="mt-2"
      >คะแนนของคุณ</v-list-item-title
    >
    <v-spacer></v-spacer>
    <v-list-item-title style="font-size: 20px; font-weight: bold" class="mt-2"
      >1234
      <span class="mr-2" style="font-size: 15px; font-weight: lighter">
        คะแนน</span
      ></v-list-item-title
    >
  </v-app-bar>

  <v-card
    max-height="350"
    :elevation="0"
    :style="{ background: 'linear-gradient(to bottom, #72dbb9, #c5e3fc)', color: '#fff' }"
  >
    <v-container fluid>
      <v-row>
        <v-col class="mt-3">
          <v-card
            rounded="lg"
            style="background-color: #0f0889; max-height: 300px; min-height: 300px"
            ><v-card-item
              style="color: white; text-align: center; font-size: medium; font-size: 15px"
              class="mt-15 pt-10"
              >ใช้ {{ reward?.rewardPaypoint }} คะแนน
              <div class="mb-1 mt-1" style="color: #72dbb9; font-size: 30px">รับฟรี</div>
              <div class="mb-1 mt-1" style="font-size: 15px">{{ reward?.rewardDescription }}</div>
            </v-card-item>
          </v-card>
        </v-col>
        <v-col>
          <v-card style="margin: auto; height: 85%; width: 102%; margin-top: -3px" rounded="0">
            <v-img
              cover
              :src="reward?.rewardImg"
              style="margin: auto; object-fit: fill; height: 100%; width: 100%"
            ></v-img
          ></v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
  <v-list-item-title class="ml-5 mt-2" style="font-size: small; font-weight: bold"
    >ใช้ {{ reward?.rewardPaypoint }} คะแนนแลก{{ reward?.rewardDescription }}</v-list-item-title
  >
  <v-container fluid style="margin-top: -10px"
    ><v-card
      height="120"
      rounded="lg"
      :elevation="0"
      :style="{ background: 'linear-gradient(to bottom, #fff, #c5e3fc)', color: '#fff' }"
    >
      <v-row>
        <v-col style="margin-top: -10px">
          <v-card-text>
            <v-icon color="rgb(43, 102, 211)" size="35">{{ mdiAlphaPCircleOutline }}</v-icon
            ><span style="color: gray" class="ml-2">ใช้คะแนน</span>
            <div
              style="font-size: 18px; color: #5f1ced; font-weight: bold; margin-top: -8px"
              class="ml-11"
            >
              {{ reward?.rewardPaypoint }}
            </div></v-card-text
          ></v-col
        ><v-col style="color: gray" class="mt-3">
          ระยะเวลา
          <div style="font-size: 16px; color: #5f1ced">
            {{ rewardStore.toLocalDate(reward?.rewardStartDate, 'long') }} -
            {{ rewardStore.toLocalDate(reward?.rewardEndDate, 'long') }}
          </div></v-col
        >
      </v-row>
      <v-divider color="black"></v-divider>

      <div style="font-size: 16px; color: black" class="ml-5">
        จำนวนสินค้า
        <span style="font-size: 14px; color: rgb(20, 203, 128)"
          >(คงเหลือ {{ reward?.rewardAmount }} ชิ้น)</span
        >
      </div>
    </v-card>
    <v-list-item-title class="ml-5 mt-2" style="font-size: large; font-weight: bold"
      >รายละเอียด</v-list-item-title
    >
    <v-list-item-title class="ml-5 mt-2" style="font-size: small; color: gray"
      >ใช้ {{ reward?.rewardPaypoint }} {{ reward?.rewardName }}</v-list-item-title
    >
    <v-list-item-title class="ml-5 mt-2" style="font-size: large; font-weight: bold"
      >เงื่อนไข</v-list-item-title
    >
    <v-list-item-title class="ml-5 mt-2" style="font-size: 11px; color: gray"
      ><div>1.สมาชิกใช้คะแนนสะสม Beger Coin 8,000 คะแนน รับฟรี แลกเครื่องฟอกอากาศ Samsung</div>
      <div>2.ลูกค้า 1 ท่าน สามารถรับสิทธิ์ได้สูงสุด 2 สิทธิ์ / ใบเสร็จ และ 2 สิทธิ์/ แคมเปญ</div>
      <div>3.รับสิทธิ์ได้ตั้งแต่ 1 ตุลาคม 2565 - 31 ตุลาคม 2565</div>
      <div>4.ไม่สามารถใช้รหัสที่เกิดจากการ capture หน้าจอโทรศัพท์มาแสดง เพื่อใช้ขอรับสิทธิ์</div>
      <div>
        5.ไม่สามารถแลกเปลี่ยนหรือทอนเป็นเงินสด และไม่สามารถใช้ร่วมกับ ส่วนลดหรือโปรโมชั่นอื่นได้
      </div></v-list-item-title
    >
    <v-btn
      style="
        height: 50px;
        background-color: #5f1ced;
        color: white;
        position: fixed;
        bottom: 20px;
        left: 15px;
        right: 15px;
      "
      rounded="xl"
    >
      แลกสิทธ์</v-btn
    >
  </v-container>
</template>
