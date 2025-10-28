<template>
  <footer class="mt-auto bg-white border-t border-black ">
    <div class="container-centered px-6 py-6 text-sm text-gray-600 w-[90%] md:w-4/5 max-w-[1440px] mx-auto">© {{ year }} TicketApp. All rights reserved.</div>
  </footer>
</template>

<script>
export default {
  data() { return { year: new Date().getFullYear() } }
}
</script>
