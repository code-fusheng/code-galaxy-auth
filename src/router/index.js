import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: ()=> import('@/views/layout'),
    children: [
      {
        path: '',
        component: ()=> import('@/views/index/index'),
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
