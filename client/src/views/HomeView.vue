<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useAppsStore } from '../stores/apps'

const appsStore = useAppsStore()
</script>

<template>
  <section>
    <h1 class="text-2xl font-bold">Welcome to the Portal</h1>
    <p class="mt-2 text-gray-600">Choose an application below.</p>

    <div class="mt-6 grid gap-4 sm:grid-cols-2">
      <RouterLink
        v-for="app in appsStore.apps"
        :key="app.route"
        :to="app.route"
        class="block rounded-lg border bg-white p-4 hover:border-gray-400"
      >
        <h2 class="font-semibold">{{ app.name }}</h2>
        <p class="mt-1 text-sm text-gray-600">{{ app.description }}</p>
      </RouterLink>
    </div>
  </section>
</template>
