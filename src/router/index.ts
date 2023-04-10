// 引入vue-router
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import NotFound from '@/views/404.vue'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/main',
    component: () => import('@/views/main/main.vue')
  },
  {
    path: '/index',
    component: () => import('@/views/index.vue')
  }
]

// 创建路由
const router = createRouter({
  routes,
  history: createWebHashHistory()
})

// 导出路由
export default router
