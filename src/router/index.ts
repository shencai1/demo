// 引入vue-router
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import NotFound from '@/views/si.vue'
import users from '@/views/Users.vue'
import index from '@/view/index.vue'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/views/Users.vue'),
    meta: {
      title: '后台首页'
    }
  },
  {
    path: '/index',
    component: () => import('@/views/layout/index.vue')
  },
  {
    path: '/login',
    component: () => import('@/views/login/login.vue'),
    meta: {
      title: '登录页'
    }
  },
  {
    path: '/main',
    component: () => import('@/views/main/main.vue')
  },

  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/si.vue')
  }
]

// 创建路由
const router = createRouter({
  routes,
  history: createWebHashHistory()
})

// 导出路由
export default router
