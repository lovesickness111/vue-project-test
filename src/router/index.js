import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/newpost',
    name: 'newpost',
   
    component: () => import('../test-components/5.call-api/AddPostNew.vue')
  },
  {
    path: '/todo',
    name: 'todo',
    component: () => import('@/components/TodoApp.vue')
  },
  {
    path: '/math',
    name: 'math',
<<<<<<< HEAD
    component: () => import('@/test-components/7.SnapShotTest/MathApp.vue') 
=======
    component: () => import('@/test-components/7.SnapShotTest/MathApp.vue')
>>>>>>> 3e47b0d (sua route loi)
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
