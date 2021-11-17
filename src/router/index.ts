import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { RouteNames } from '@/constants/route-names'
import Home from '../views/home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: RouteNames.HOME,
    component: Home
  }
  // {
  //   path: '/users/:id',
  //   name: RouteNames.USERS,
  //   props: true,
  //   component: PostView,
  //   children: [
  //     {
  //       path: 'edit',
  //       name: RouteNames.POST_EDIT,
  //       component: PostEdit
  //     }
  //   ]
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
