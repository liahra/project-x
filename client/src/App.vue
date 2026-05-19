<script setup lang="ts"></script>

<template>
  <div class="min-h-screen bg-gray-50">
    <header class="bg-white border-b">
      <nav class="mx-auto max-w-3xl flex gap-6 px-4 py-4">
        <RouterLink to="/" class="font-semibold">Portal</RouterLink>
        <RouterLink to="/weather">Weather</RouterLink>
        <RouterLink to="/notes">Notes</RouterLink>
      </nav>
    </header>

    <main class="mx-auto max-w-3xl px-4 py-8">
      <RouterView />
    </main>
  </div>
</template>
