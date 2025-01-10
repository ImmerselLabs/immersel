import { createRouter, createWebHistory } from 'vue-router'
import AuthComponent from '@/components/auth.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "",
      name: 'root',
      component: AuthComponent
    },
    {
      path: "/home",
      name: "home",
      component: () => import("@/views/home-view.vue")
    }
  ],
})

export default router
