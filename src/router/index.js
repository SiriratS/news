import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../pages/AppHome.vue'),
  },
  {
    path: '/news/:id',
    name: 'news-detail',
    component: () => import('../pages/AppNewsDetail.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
