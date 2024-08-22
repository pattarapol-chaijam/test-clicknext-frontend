<script setup lang="ts">
import { mdiChevronDown, mdiChevronUp, mdiLogout, mdiAccountOutline } from '@mdi/js'
</script>
<template>
  <v-app-bar color="#eaebec" style="border-radius: 15px; height: 8%" :elevation="2">
    <v-spacer></v-spacer>
    <v-menu>
      <template v-slot:activator="{ isActive, props }">
        <v-list-item
          class="mt-2"
          style="color: #76737d; font-weight: 900"
          title="ยินดีต้อนรับ"
          subtitle="Pattarapol"
        ></v-list-item>
        <v-avatar
          v-bind="props"
          class="mt-2"
          size="40"
          color="#efeff1"
          style="border: 2px solid #0f5d84"
          ><v-img alt="" src=""></v-img
        ></v-avatar>

        <div class="mx-4 mt-2">
          <v-icon :icon="isActive ? mdiChevronUp : mdiChevronDown" v-bind="props"></v-icon>
        </div>
      </template>
      <v-list class="mt-5">
        <v-list-item :prepend-icon="mdiAccountOutline">
          <v-list-item-title>Pattarapol</v-list-item-title>
        </v-list-item>
        <v-divider class="border-opacity-50 mt-2"></v-divider>
        <div class="mt-2">
          <v-hover>
            <template v-slot:default="{ isHovering, props }">
              <v-list-item
                :prepend-icon="mdiLogout"
                title="ออกจากระบบ"
                v-bind="props"
                :style="{ color: isHovering ? 'red' : 'black' }"
              >
              </v-list-item>
            </template>
          </v-hover>
        </div>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>
<style scoped></style>
