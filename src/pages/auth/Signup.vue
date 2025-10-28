<template>
  <main class="container-centered px-6 py-12">
    <div class="max-w-md mx-auto bg-white rounded-2xl shadow p-6">
      <h2 class="text-2xl font-semibold">Create account</h2>
      <form @submit.prevent="submit" class="mt-4 space-y-4">
        <div>
          <label class="block text-sm">Name</label>
          <input v-model="name" class="w-full mt-1 p-2 border rounded" />
          <p v-if="errors.name" class="text-xs text-red-600 mt-1">{{ errors.name }}</p>
        </div>
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
          <button class="px-4 py-2 bg-indigo-600 text-white rounded">Create account</button>
          <router-link class="text-sm text-indigo-600" to="/auth/login">Login</router-link>
        </div>
      </form>
    </div>
  </main>
</template>

<script>
import { signup } from '../../services/authService'
import { useRouter } from 'vue-router'
import { toastSuccess, toastError } from '../../utils/toast'
import { ref, reactive } from 'vue'

export default {
  setup() {
    const router = useRouter()
    const name = ref('')
    const email = ref('')
    const password = ref('')
    const errors = reactive({})

    async function submit() {
      errors.name = ''
      errors.email = ''
      errors.password = ''
      if (!name.value) errors.name = 'Name required'
      if (!email.value) errors.email = 'Email required'
      if (!password.value || password.value.length < 8) errors.password = 'Password must be at least 8 chars'
      if (Object.keys(errors).some(k => errors[k])) return
      try {
        await signup({ name: name.value, email: email.value, password: password.value })
        toastSuccess('Account created')
        router.push('/dashboard')
      } catch (e) {
        toastError('Failed to signup')
      }
    }

    return { name, email, password, errors, submit }
  }
}
</script>
