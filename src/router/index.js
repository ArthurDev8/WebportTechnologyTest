import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'TilePosts',
    component: ()=> import('@/views/TilePosts')
  },
  {
    path: '/posts/:id',
    name: 'Post',
    component: ()=> import('@/views/Post')
  },
  {
    path: '/users',
    name: 'Users',
    component: ()=> import('@/views/Users')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
