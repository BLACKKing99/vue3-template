import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { App } from 'vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/Home.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default (app: App<Element>) => {
  app.use(router)
}
