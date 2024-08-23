<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'
import { mdiAccount, mdiEye, mdiEyeOff, mdiLock } from '@mdi/js'
import type { VForm } from 'vuetify/components'
import MessageDialog from '@/components/Dialog/MessageDialog.vue'
const router = useRouter()
const authStore = useAuthStore()
const userName = ref('')
const password = ref('')
const valid = ref(true)
const showPass = ref(false)
const form = ref<InstanceType<typeof VForm> | null>(null)

const signIn = async () => {
  const { valid } = await form.value!.validate()
  if (valid) {
    authStore.signIn(userName.value, password.value)
  }
}
</script>

<template>
  <MessageDialog></MessageDialog>
  <v-container fluid class="gradient-background">
    <v-row class="d-flex justify-center mt-10">
      <v-card class="login-card mx-auto px-6 py-8 mt-10" width="410px" height="510px">
        <v-card-title class="text-center title">
          Welcome !
          <div class="mt-1 mb-1">
            <v-avatar
              style="border: 4px solid #5004ec; box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3)"
              size="100 "
              ><v-img
                height="100%"
                src="https://demo-point-insurance.clicknext.com/images/6s.png"
                cover
              ></v-img>
            </v-avatar>
          </div>
        </v-card-title>

        <v-card-subtitle class="text-center subtitle"> Sign in to continue </v-card-subtitle>
        <v-form ref="form" v-model="valid" class="mt-6">
          <v-text-field
            :prepend-inner-icon="mdiAccount"
            v-model="userName"
            class="mb-6"
            label="Username"
            variant="outlined"
            color="primary"
            density="comfortable"
            hide-details
            :rules="[(v) => !!v || 'Username is required']"
          ></v-text-field>
          <v-text-field
            :prepend-inner-icon="mdiLock"
            :type="showPass ? 'text' : 'password'"
            v-model="password"
            :append-inner-icon="showPass ? mdiEye : mdiEyeOff"
            @click:append-inner="showPass = !showPass"
            label="Password"
            variant="outlined"
            color="darkblue"
            density="comfortable"
            hide-details
            :rules="[(v) => !!v || 'Password is required']"
          ></v-text-field>
        </v-form>

        <v-btn
          class="login-btn"
          style="height: 50px"
          color="#5004ec"
          block
          large
          rounded="lg"
          @click="signIn"
        >
          Sign In
        </v-btn>
      </v-card>
    </v-row>
  </v-container>
</template>

<style scoped>
.gradient-background {
  background:
    url('https://demo-point-insurance.clicknext.com/images/bg-01.svg') center/cover no-repeat,
    linear-gradient(to bottom right, #4a90e2, #9013fe);
  min-height: 100vh;
}

.login-card {
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background-color: #f5f7fa;
}

.title {
  font-size: 28px;
  font-weight: bold;
  color: #053549;
}

.subtitle {
  font-size: 16px;
  color: #6b6b6b;
}

.login-btn {
  margin-top: 70px;
  border-radius: 30px;
  font-weight: bold;
  text-transform: none;
}

v-form {
  max-width: 320px;
  margin: 0 auto;
}
</style>
