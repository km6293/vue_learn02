import { createWebHistory, createRouter } from "vue-router";
import List from './components/List.vue';
import Home from './components/home.vue';
import Detail from './components/Detail.vue';
import Author from './components/Author.vue';
import Comment from './components/Comment.vue';
import Error from './error.vue';
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
    children: [
      {
        path: "author",
        component: Author
      },
      {
        path: "comment",
        component: Comment
      }
    ]
  },
  {
    // 404 페이지
    // 만일 Component가 Error이 아닌 Home으로 해놓은 경우 좀 더 위에 있는걸로 감
    path: "/:anything(.*)",
    component: Error,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 