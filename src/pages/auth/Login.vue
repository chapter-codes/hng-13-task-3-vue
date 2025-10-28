<template>
  <main class="container-centered px-6 py-12">
    <div class="max-w-md mx-auto bg-white rounded-2xl shadow p-6">
      <h2 class="text-2xl font-semibold">Login</h2>
      <form @submit.prevent="submit" class="mt-4 space-y-4">
        <div>
          <label class="block text-sm">Email</label>
          <input v-model="email" class="w-full mt-1 p-2 border rounded" />
          <p v-if="errors.email" class="text-xs text-red-600 mt-1">{{ errors.email }}</p>
        </div>
        <div>
          <label class="block text-sm">Password</label>
          <input type="password" v-model="password" class="w-full mt-1 p-2 border rounded" />
          <p v-if="errors.password" class="text-xs text-red-600 mt-1">{{ errors.password }}</p>
        </div>
        <div class="flex items-center justify-between">
          <button class="px-4 py-2 bg-indigo-600 text-white rounded">Login</button>
          <router-link class="text-sm text-indigo-600" to="/auth/signup">Sign up</router-link>
        </div>
      </form>
      <div class="mt-4 text-sm text-gray-500">Test user: <strong>test@example.com</strong> / <strong>Password123</strong></div>
    </div>
  </main>
</template>

<script>
import { login } from '../../services/authService'
import { useRouter } from 'vue-router'
import { toastSuccess, toastError } from '../../utils/toast'
import { ref, reactive } from 'vue'

export default {
  setup() {
    const router = useRouter()
    const email = ref('')
    const password = ref('')
    const errors = reactive({})

    async function submit() {
      errors.email = ''
      errors.password = ''
      if (!email.value) errors.email = 'Email is required.'
      if (!password.value) errors.password = 'Password is required.'
      if (errors.email || errors.password) return
      try {
        await login({ email: email.value, password: password.value })
        toastSuccess('Logged in')
        router.push('/dashboard')
      } catch (e) {
        toastError('Invalid credentials')
      }
    }
    return { email, password, errors, submit }
  }
}
</script>
