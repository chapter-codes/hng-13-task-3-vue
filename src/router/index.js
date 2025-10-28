import { createRouter, createWebHistory } from 'vue-router'
import Landing from '../pages/Landing.vue'
import Login from '../pages/auth/Login.vue'
import Signup from '../pages/auth/Signup.vue'
import Dashboard from '../pages/Dashboard.vue'
import Tickets from '../pages/Tickets.vue'
import NotFound from '../pages/NotFound.vue'
import { getSession } from '../services/authService'

const routes = [
  { path: '/', component: Landing },
  { path: '/auth/login', component: Login },
  { path: '/auth/signup', component: Signup },
  { path: '/dashboard', component: Dashboard, meta: { requiresAuth: true } },
  { path: '/tickets', component: Tickets, meta: { requiresAuth: true } },
  { path: '/:pathMatch(.*)*', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !getSession()) {
    next('/auth/login')
  } else {
    next()
  }
})

export default router
