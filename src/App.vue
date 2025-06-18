<script setup lang="ts">
import { useAuthStore } from './stores/auth';
const auth = useAuthStore();
</script>
<template>
  <div>
    <header>
      <nav v-if="auth.isAuthenticated">
        <router-link to="/">home</router-link> |
        <router-link to="/dashboard">Dashboard</router-link> |
        <a href="#" @click.prevent="auth.logout">Logout</a>
      </nav>
      <nav v-else>
        <router-link to="/">home</router-link> |
        <router-link to="/login">Login</router-link> 
      </nav>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>
<style scoped>
nav {
  margin-bottom: 20px;
}
nav a {
  margin: 0 10px;
  text-decoration: none;
}
</style>
