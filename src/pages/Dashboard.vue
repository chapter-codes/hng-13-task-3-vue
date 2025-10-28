<template>
  <main class="container-centered px-6 py-12 w-[90%] md:w-4/5 max-w-[1440px] mx-auto">
    <div class="flex items-center justify-between">
      <h1 class="text-2xl font-semibold">Dashboard</h1>
      <router-link to="/tickets" class="px-3 py-1 bg-indigo-600 text-white rounded">Manage Tickets</router-link>
    </div>

    <section class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
      <div class="bg-white p-6 rounded-2xl shadow">Total tickets <div class="text-3xl font-bold mt-4">{{ total }}</div></div>
      <div class="bg-white p-6 rounded-2xl shadow">Open tickets <div class="text-3xl font-bold mt-4">{{ openCount }}</div></div>
      <div class="bg-white p-6 rounded-2xl shadow">Resolved <div class="text-3xl font-bold mt-4">{{ resolved }}</div></div>
    </section>
  </main>
</template>

<script>
import { fetchTickets } from '../services/ticketService'
import { onMounted, ref, computed } from 'vue'
import { toastError } from '../utils/toast'

export default {
  setup() {
    const tickets = ref([])
    const loading = ref(true)
    async function load() {
      loading.value = true
      try {
        tickets.value = await fetchTickets()
      } catch (e) {
        toastError('Failed to load tickets. Please retry.')
      }
      loading.value = false
    }
    onMounted(load)
    const total = computed(() => tickets.value.length)
    const openCount = computed(() => tickets.value.filter(t => t.status === 'open').length)
    const resolved = computed(() => tickets.value.filter(t => t.status === 'closed').length)
    return { tickets, loading, total, openCount, resolved }
  }
}
</script>
