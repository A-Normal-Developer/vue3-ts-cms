/*
 * @Author: liruihong
 * @Date: 2022-04-30 21:17:51
 * @LastEditTime: 2022-04-30 21:28:19
 * @LastEditors: liruihong
 * @Description:
 */

import { createRouter, createWebHashHistory } from "vue-router"
import type { RouteRecordRaw } from "vue-router"

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/login",
    component: () => import("@/views/login/login.vue")
  },
  {
    path: "/main",
    component: () => import("@/views/main/main.vue")
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router
