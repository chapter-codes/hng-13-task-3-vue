<template>
  <article class="bg-white rounded-2xl shadow  p-4 py-8">
    <div class="flex items-start justify-between gap-4">
      <div>
        <h3 class="font-semibold">{{ ticket.title }}</h3>
        <p class="mt-2 text-sm text-gray-600">{{ ticket.description || 'No description' }}</p>
        <div :class="['mt-3 text-xs inline-flex items-center gap-2 py-1 px-6 rounded-full', statusClass]">
          <span class="capitalize whitespace-nowrap">{{ displayStatus }}</span>
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <button @click="$emit('edit', ticket)" class="text-sm px-3 py-1 rounded bg-indigo-50">Edit</button>
        <button @click="$emit('delete', ticket)" class="text-sm px-3 py-1 rounded bg-red-50 text-red-600">Delete</button>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: ['ticket'],
  computed: {
    statusClass() {
      if (this.ticket.status === 'open') return 'bg-status-open/10 text-status-open'
      if (this.ticket.status === 'in_progress') return 'bg-status-in_progress/10 text-status-in_progress'
      return 'bg-status-closed/10 text-status-closed'
    },
    displayStatus() {
      return this.ticket.status.replace('_', ' ')
    }
  }
}
</script>
