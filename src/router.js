import { createWebHistory, createRouter } from "vue-router";
import List from './components/List.vue';
import Home from './components/home.vue';
import Detail from './components/Detail.vue';
// /list 경로로 오면 List.vue를 보여주자.
const routes = [
  {
    path: "/list",
    component: List,
  },
  {
    path: "/",
    component: Home,
  },
  {
    // parameter 작명(id) 된 곳은 Detail.vue에서 쓰고 있음
    // /detail/:id(\\d+) 숫자만 찾아주는 정규식 문법 씹가능
    // vue-router 4 참고
    path: "/detail/:id",
    component: Detail,
  },
  {
    // 404 페이지
    path: "/:anything(.*)",
    component: Home,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 