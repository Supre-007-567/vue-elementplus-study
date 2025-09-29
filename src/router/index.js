import { createRouter, createWebHashHistory } from 'vue-router'
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/Layout/LayoutPage.vue'),
      redirect: '/button',
      children: [
        {
          path: '/button',
          component: () => import('@/views/Button/ButtonPage.vue'),
        },
        {
          path: '/icon',
          component: () => import('@/views/Icon/IconsPage.vue'),
        },
        {
          path: '/tag',
          component: () => import('@/views/Tag/TagPage.vue'),
        },
        {
          path: '/message',
          component: () => import('@/views/Message/MessagePage.vue'),
        },
        {
          path: '/nav',
          component: () => import('@/views/Nav/NavPage.vue'),
        },
      ],
    },
  ],
})

export default router
