<script setup lang="ts">
import { mdiAlphaPCircleOutline, mdiStar } from '@mdi/js'
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
          style="background-color: white; height: 140px; width: 99%"
          rounded="xl"
          :elevation="0"
        >
          <v-img
            class="mt-2"
            width="55"
            height="55"
            src="https://www.svgrepo.com/show/530249/savings.svg "
          ></v-img>
          <v-list-item-title style="font-size: small">รับคะแนนเพิ่ม</v-list-item-title>
          <v-list-item-title style="font-size: medium; font-weight: bold"
            >กด 1 ครั้ง รับ 1 คะแนน</v-list-item-title
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
          >ประวัติการแลก</v-list-item-title
        ></v-col
      >
    </v-row>
    <v-row style="margin-top: -10px">
      <v-col cols="auto">
        <v-card
          style="background-color: white"
          rounded="xl"
          :elevation="0"
          width="260"
          height="300"
          align="start"
        >
          <v-img
            src="https://demo-point-insurance.clicknext.com/images/zizler-1.png"
            cover
            height="200px"
          >
            <v-card
              style="
                background-color: #da4453;
                font-weight: bold;
                font-size: 10px;
                color: white;
                border: 1px solid white;
              "
              class="mt-2 pt-1"
              width="80px"
              height="25px"
              >Hot Deals!</v-card
            >
          </v-img>
          <v-list-item-subtitle style="font-size: 11px" class="ml-2 mt-2">หฟก</v-list-item-subtitle>
          <v-list-item-title style="font-size: medium; font-weight: bold" class="ml-2 mt-7"
            ><v-icon color="rgb(43, 102, 211)">{{ mdiAlphaPCircleOutline }}</v-icon
            ><span style="font-size: small; font-weight: lighter; color: #5004ec" class="ml-1">
              คะแนน</span
            ></v-list-item-title
          ><v-list-item-subtitle style="font-size: x-small" class="ml-3"
            >หมดอายุ
            <v-icon style="margin-left: 125px" size="20" color="#f4bd4c">{{
              mdiStar
            }}</v-icon></v-list-item-subtitle
          >
        </v-card></v-col
      >
    </v-row>
  </v-container>
</template>
