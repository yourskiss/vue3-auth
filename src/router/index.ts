import { createRouter, createWebHashHistory } from 'vue-router';
import Login from './../views/Login.vue';
import Dashboard from './../views/Dashboard.vue';
import Home from './../views/Home.vue';
import { useAuthStore } from './../stores/auth';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  { 
    path: '/login', 
    name: 'Login', 
    component: Login,
    meta: { guestOnly: true },
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true },
  },
  { 
    path: '/:pathMatch(.*)*', 
    redirect: '/login' 
  },
];

const router = createRouter({
  history:  createWebHashHistory(), // createWebHistory(),
  routes,
});

router.beforeEach((to, _, next) => {
  const auth = useAuthStore();
  if (to.meta.requiresAuth && !auth.token) {
   return next('/');
  }
  if (to.meta.guestOnly && auth.token) {
    return next('/dashboard');
  }
  next();
});

export default router;

 
 
