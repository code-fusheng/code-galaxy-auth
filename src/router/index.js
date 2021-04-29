import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redricet: '/index',
    name: 'Layout',
    component: () => import('@/views/layout/index'),
    children: [
      {
        path: '/index',
        name: '首页',
        component: () => import('@/views/index/index')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
