import { ref } from 'vue'
import { defineStore } from 'pinia'

export interface PortalApp {
  name: string
  description: string
  route: string
}

export const useAppsStore = defineStore('apps', () => {
  const apps = ref<PortalApp[]>([
    {
      name: 'Weather',
      description: 'Look up current weather for a city.',
      route: '/weather',
    },
    {
      name: 'Notes',
      description: 'A simple place to write things down.',
      route: '/notes',
    },
  ])

  return { apps }
})
