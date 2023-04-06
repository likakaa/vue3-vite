//import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { ViteSSG } from "vite-ssg";
import type { RouteRecordRaw } from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";

// const app = createApp(App)
// app.use(router)
// app.mount('#app')

const routes: RouteRecordRaw[] = [
  // 定义路由
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

export const createApp = ViteSSG(
  App,
  { routes },
  ({ app, isClient, router, routes, initialState }) => {


    router.beforeEach((to, from, next) => {
      console.log("路由拦截", to, from);
      next();
    });
    if (isClient) {
      // 客户端
    }
  }
);
