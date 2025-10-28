<template>
  <main class="container-centered px-6 pt-12 pb-8">
    <!-- Hero Section -->
    <section
      class="relative overflow-hidden mt-8 bg-gradient-to-b from-indigo-50 to-white rounded-2xl w-[90%] md:w-4/5 max-w-[1440px] mx-auto"
    >
      <div class="pl-4 md:pl-8 pt-10 md:pt-24">
        <h1 class="text-4xl font-extrabold text-gray-900">
          TicketApp — Multi-framework Ticket Manager
        </h1>
        <p class="mt-4 text-lg text-gray-700">
          Build, manage and track tickets with a clean, consistent UI.
          <br />
          Implementations: React, Vue, Twig.
        </p>
        <div class="mt-6 flex gap-4">
          <router-link
            to="/auth/signup"
            class="px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition"
          >
            Get Started
          </router-link>
          <router-link
            to="/auth/login"
            class="px-4 py-2 rounded-md border hover:bg-gray-100 transition"
          >
            Login
          </router-link>
        </div>
      </div>

      <div
        class="absolute -right-20 -bottom-12 w-56 h-56 rounded-full opacity-30 bg-indigo-300"
      ></div>
      <div class="mt-4">
        <img src="/assets/hero-wave.svg" alt="wave" class="w-full block" />
      </div>
    </section>

    <!-- Features Section -->
    <section
      class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 w-[90%] md:w-4/5 max-w-[1440px] mx-auto"
    >
      <article
        v-for="(feature, index) in features"
        :key="index"
        class="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition "
      >
        <img
          :src="feature.image"
          :alt="feature.title"
          class="w-12 h-12  mb-3 object-contain"
        />
        <h3 class="text-lg font-semibold mb-2 text-gray-900">
          {{ feature.title }}
        </h3>
        <p class="text-gray-600 text-sm">
          {{ feature.description }}
        </p>
      </article>
    </section>
  </main>
</template>

<script>
export default {
  name: "Landing",
  data() {
    return {
      features: [
        {
          image: "/assets/unified.png",
          title: "Unified Dashboard",
          description:
            "Track, manage, and analyze all your tickets in one intuitive, easy-to-navigate interface.",
        },
        {
          image: "/assets/secure.jpg",
          title: "Secure & Reliable",
          description:
            "Your data is safe with built-in encryption, session validation, and seamless authentication.",
        },
        {
          image: "/assets/customizable.png",
          title: "Customizable Workflow",
          description:
            "Adapt TicketApp to your team's process — tweak forms, priorities, and statuses easily.",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Optional: Smooth card transition */
article {
  transition: all 0.25s ease;
}
article:hover {
  transform: translateY(-4px);
}
</style>
