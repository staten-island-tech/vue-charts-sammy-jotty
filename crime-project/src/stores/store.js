import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const store = defineStore('counter', () => {
  const userFilters = []

  return { count, doubleCount, increment }
})
