<template>
  <main class="container-centered px-6 py-12 w-[90%] md:w-4/5 max-w-[1440px] mx-auto">

    <!-- just for preloading the tailwind classes -->
     <div class="hidden ">
      <p class="flex items-center gap-2 fixed top-5 right-5 z-50 px-4 py-2 bg-white text-black rounded shadow transition-all duration-500 scale-110 origin-top-right"></p>
     </div>
    <!-- closing comment for above : just for preloading... -->

    <div class="flex items-center justify-between">
      <h1 class="text-2xl font-semibold">Tickets</h1>
      <div class="flex items-center gap-4">
        <button @click="openCreate" class="px-3 py-1 bg-indigo-600 text-white rounded">New Ticket</button>
      </div>
    </div>

    <section class="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div v-if="loading">Loading...</div>
      <TicketCard v-for="t in tickets" :key="t.id" :ticket="t" @edit="openEdit" @delete="doDelete" />
      <div v-if="!loading && tickets.length === 0" class="col-span-full">No tickets yet.</div>
    </section>

    <div v-if="formOpen" class="fixed inset-0 flex items-center justify-center bg-black/30">
      <div class="bg-white rounded-2xl p-6 w-full max-w-lg">
        <h3 class="text-lg font-semibold">{{ editing ? 'Edit Ticket' : 'Create Ticket' }}</h3>
        <form @submit.prevent="submit" class="mt-4 space-y-4">
          <div>
            <label class="block text-sm">Title</label>
            <input v-model="form.title" class="w-full mt-1 p-2 border rounded" />
            <p v-if="errors.title" class="text-xs text-red-600 mt-1">{{ errors.title }}</p>
          </div>
          <div>
            <label class="block text-sm">Status</label>
            <select v-model="form.status" class="w-full mt-1 p-2 border rounded">
              <option value="open">open</option>
              <option value="in_progress">in_progress</option>
              <option value="closed">closed</option>
            </select>
            <p v-if="errors.status" class="text-xs text-red-600 mt-1">{{ errors.status }}</p>
          </div>
          <div>
            <label class="block text-sm">Description</label>
            <textarea v-model="form.description" class="w-full mt-1 p-2 border rounded" rows="4"></textarea>
            <p v-if="errors.description" class="text-xs text-red-600 mt-1">{{ errors.description }}</p>
          </div>
          <div class="flex items-center justify-end gap-2">
            <button type="button" @click="formOpen=false" class="px-3 py-1 border rounded">Cancel</button>
            <button class="px-3 py-1 bg-indigo-600 text-white rounded">Save</button>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
import { fetchTickets, createTicket, updateTicket, deleteTicket } from '../services/ticketService'
import TicketCard from '../components/TicketCard.vue'
import { ref, onMounted } from 'vue'
import { toastSuccess, toastError } from '../utils/toast'

export default {
  components: { TicketCard },
  setup() {
    const tickets = ref([])
    const loading = ref(true)
    const formOpen = ref(false)
    const editing = ref(null)
    const form = ref({ title: '', description: '', status: 'open', priority: 'medium' })
    const errors = ref({})

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

    function openCreate() {
      editing.value = null
      form.value = { title: '', description: '', status: 'open', priority: 'medium' }
      errors.value = {}
      formOpen.value = true
    }
    function openEdit(ticket) {
      editing.value = ticket
      form.value = { title: ticket.title, description: ticket.description, status: ticket.status, priority: ticket.priority || 'medium' }
      errors.value = {}
      formOpen.value = true
    }

    function validateTicketInput(payload) {
      const errs = {}
      if (!payload.title || payload.title.trim().length < 3) errs.title = 'Title is required (min 3 chars)'
      if (!['open', 'in_progress', 'closed'].includes(payload.status)) errs.status = 'Status must be one of: open, in_progress, closed'
      if (payload.description && payload.description.length > 3000) errs.description = 'Description too long'
      return errs
    }

    async function submit() {
      errors.value = validateTicketInput(form.value)
      if (Object.keys(errors.value).length) return
      try {
        if (editing.value) {
          const updated = await updateTicket(editing.value.id, form.value)
          tickets.value = tickets.value.map(t => t.id === updated.id ? updated : t)
          toastSuccess('Ticket updated')
        } else {
          const created = await createTicket(form.value)
          tickets.value.unshift(created)
          toastSuccess('Ticket created')
        }
        formOpen.value = false
      } catch (e) {
        toastError('Failed to save ticket')
      }
    }

    async function doDelete(ticket) {
      if (!confirm('Delete this ticket?')) return
      try {
        await deleteTicket(ticket.id)
        tickets.value = tickets.value.filter(t => t.id !== ticket.id)
        toastSuccess('Deleted')
      } catch (e) {
        toastError('Failed to delete')
      }
    }

    return { tickets, loading, formOpen, editing, form, errors, openCreate, openEdit, submit, doDelete }
  }
}
</script>
