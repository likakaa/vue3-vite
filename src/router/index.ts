import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    // 定义路由
    {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/about',
        name: 'About',
        component: About
      }
  ]
});

export default router;