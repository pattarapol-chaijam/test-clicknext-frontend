<script setup lang="ts">
import { mdiTicketConfirmation, mdiLineScan } from '@mdi/js'
</script>

<template>
  <v-card variant="flat" style="margin-top: -20px; background-color: #f4f4f4" rounded="xl">
    <v-img cover src="https://demo-point-insurance.clicknext.com/images/cover_profile.svg">
      <v-container fluid class="mt-10">
        <v-card style="width: 100%; height: 330px; position: static" class="mt-15" rounded="lg">
          <v-row justify="center">
            <v-avatar
              style="
                margin-top: -40px;
                position: absolute;
                border: 4px solid white;
                box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
              "
              size="100 "
              ><v-img
                height="100%"
                src="https://demo-point-insurance.clicknext.com/images/6s.png"
                cover
              ></v-img>
            </v-avatar>
            <v-card-item class="mt-15" style="font-size: 24px; width: 100%; text-align: center"
              >สวัสดี คุณ
              <v-card-subtitle style="font-size: large; text-align: center">001</v-card-subtitle>
              <v-card-title style="text-align: center"
                ><a href="" class="clickable-text"> ดูโปรไฟล์ของฉัน ></a>
              </v-card-title>
              <v-card
                height="85"
                width="97%"
                class="ml-6 mt-2"
                rounded="lg"
                style="border: 2px solid #ebf0fe"
                :elevation="0"
                :style="{ background: 'linear-gradient(to bottom, #fff, #ebf0fe)', color: '#fff' }"
              >
                <v-row>
                  <v-col style="margin-top: -10px">
                    <v-card-text style="color: black; font-size: 23px; font-weight: bold">
                      20000
                      <span style="color: black; font-size: 17px; font-weight: lighter">คะแนน</span>
                    </v-card-text>
                    <v-card-subtitle style="color: black"
                      >สะสมคะแนนที่ได้รับเพื่อแลกสิทธิพิเศษมากมาย</v-card-subtitle
                    >
                  </v-col>
                </v-row>
              </v-card>
            </v-card-item>
            <v-row class="mt-2" style="text-align: center"
              ><v-col>
                <v-icon class="mr-2" size="30">{{ mdiTicketConfirmation }}</v-icon
                >My Reward</v-col
              >
              <v-divider class="ms-3" vertical></v-divider>
              <v-col>
                <v-icon class="mr-2" size="30">{{ mdiLineScan }}</v-icon
                >Earn Point</v-col
              ></v-row
            >
          </v-row>
        </v-card>
      </v-container>
    </v-img>
  </v-card>
  <v-container fluid>
    <v-card style="margin-top: -30px; height: 230px" rounded="xl" :elevation="0">
      <v-card-title>
        <v-row class="mt-4 ml-3" align="center">
          <span
            ><v-img
              src="https://demo-point-insurance.clicknext.com/images/history.svg"
              width="35"
              height="35"
              class="mb-1"
            ></v-img></span
          ><span class="pl-2" style="font-size: medium; font-weight: bold"
            >ประวัติการสะสมคะแนน</span
          ></v-row
        >
        <v-divider class="mt-5"></v-divider>
        <v-row class="mt-4 ml-3" align="center">
          <span
            ><v-img
              src="https://demo-point-insurance.clicknext.com/images/privacy.svg"
              width="35"
              height="35"
              class="mb-1"
            ></v-img></span
          ><span class="pl-2" style="font-size: medium; font-weight: bold"
            >นโยบายความส่วนตัว</span
          ></v-row
        >

        <v-divider class="mt-5"></v-divider>
        <v-row class="mt-4 ml-3" align="center">
          <span
            ><v-img
              src="https://demo-point-insurance.clicknext.com/images/logout.svg"
              width="35"
              height="35"
              class="mb-1"
            ></v-img></span
          ><span class="pl-2" style="font-size: medium; font-weight: bold">ออกจากระบบ</span></v-row
        ><v-divider class="mt-5"></v-divider>
      </v-card-title> </v-card
  ></v-container>

  <v-container fluid>
    <v-card style="margin-top: -10px; height: 80px" rounded="xl" :elevation="0">
      <v-card-title>
        <v-row class="mt-1 ml-3">
          <v-col
            ><v-img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/800px-Facebook_Logo_%282019%29.png"
              width="35"
              height="35"
            ></v-img
          ></v-col>
          <v-col
            ><v-img
              src="https://static.vecteezy.com/system/resources/thumbnails/027/395/710/small/twitter-brand-new-logo-3-d-with-new-x-shaped-graphic-of-the-world-s-most-popular-social-media-free-png.png"
              width="35"
              height="35"
            ></v-img
          ></v-col>
          <v-col align="center"
            ><v-img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4vtphMtxRWfK6nO2CIbGfSETyEs79Dr6oPw&s"
              width="35"
              height="35"
            ></v-img
          ></v-col>
          <v-col align="right"
            ><v-img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/640px-Instagram_logo_2022.svg.png"
              width="35"
              height="35"
            ></v-img
          ></v-col>
          <v-col align="right"
            ><v-img
              src="https://upload.wikimedia.org/wikipedia/commons/4/41/LINE_logo.svg"
              width="35"
            ></v-img
          ></v-col>
        </v-row>
      </v-card-title> </v-card
  ></v-container>
</template>
<style>
.subtitle-text {
  display: flex;
}
.clickable-text {
  font-size: large;
  color: rgb(43, 102, 211);
  text-decoration: none;
}
</style>
