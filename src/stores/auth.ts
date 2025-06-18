import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import Cookies from 'js-cookie';
import axios from 'axios';
import router from './../router';

export const useAuthStore = defineStore('auth', () => {
    const token = ref<string | null>(Cookies.get('token') || null);
    const isAuthenticated = computed(() => !!token.value);
    const loginError = ref<string | null>(null);
    const loginSuccess = ref<string | null>(null);

    const baseURL = import.meta.env.VITE_API_BASE_URL_REQRES || 'https://reqres.in/api/';
    const apiKEY = import.meta.env.VITE_API_KEY_REQRES || 'reqres-free-v1';
  
  const login = async (email: string, password: string) => {
    loginError.value = null;
    loginSuccess.value = null;
    try {
        const response = await axios.post(baseURL+'login', { email, password }, { headers: { 'x-api-key': apiKEY  } });
        token.value = response.data.token;
        //   if (token.value) { Cookies.set('token', token.value); }
        Cookies.set('token', token.value as string);
        loginSuccess.value = 'Login successful!';
        setTimeout(() => {
           router.push('/dashboard');
        }, 500); 
    } catch (err:any) {
        loginError.value = 'Invalid email or password.';
    }
  };

  const logout = () => {
    token.value = null;
    Cookies.remove('token');
    loginSuccess.value = null;
    loginError.value = null;
    router.push('/login');
  };

  return { loginError, loginSuccess, token, login, logout, isAuthenticated };
});
