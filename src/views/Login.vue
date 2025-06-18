<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from '../stores/auth';
const email = ref<string>('eve.holt@reqres.in'); 
const password = ref<string>('cityslicka');
const auth = useAuthStore();
const handleLogin = () => {
      auth.login(email.value, password.value);
};
</script>

<template>
  <div>
    <h1>Login</h1>
    <p v-if="auth.loginSuccess" style="color: green;">{{ auth.loginSuccess }}</p>
    <p v-if="auth.loginError" style="color: red;">{{ auth.loginError }}</p>
    <form @submit.prevent="handleLogin">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  </div>
</template>


