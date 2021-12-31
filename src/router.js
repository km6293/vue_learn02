import { createWebHistory, createRouter } from "vue-router";
import List from './components/List.vue';
import Home from './components/home.vue';
// /list 경로로 오면 List.vue를 보여주자.
const routes = [
  {
    path: "/list",
    component: List,
  },
  {
    path: "/",
    component: Home,
  }  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 