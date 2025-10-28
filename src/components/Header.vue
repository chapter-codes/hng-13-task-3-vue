<template>
  <header class="bg-white shadow-sm">
    <div class="container-centered px-6 py-4 flex items-center justify-between max-w-[1440px] mx-auto">
      <div class="flex items-center gap-4">
        <router-link to="/" class="text-xl font-semibold">TicketApp</router-link>
      </div>
      <nav class="flex items-center gap-4">
        <template v-if="session">
          <router-link to="/dashboard" class="text-sm">Dashboard</router-link>
          <router-link to="/tickets" class="text-sm">Tickets</router-link>
          <button @click="doLogout" class="text-sm px-3 py-1 rounded-md bg-red-50 text-red-600">Logout</button>
        </template>
        <template v-else>
          <router-link to="/auth/login" class="text-sm">Login</router-link>
          <router-link to="/auth/signup" class="text-sm px-3 py-1 rounded-md bg-indigo-600 text-white">Get Started</router-link>
        </template>
      </nav>
    </div>
  </header>
</template>

<script>
import { getSession, logout } from '../services/authService'
import { useRouter } from 'vue-router'
export default {
  name: 'Header',
  setup() {
    const session = getSession()
    const router = useRouter()
    function doLogout() {
      logout()
      router.push('/')
    }
    return { session, doLogout }
  }
}
</script>
