import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useFilterStore = defineStore('filterStore', {
  state: () => ({
    selectedFilters: []
  }),
  getters: {
    allFilters: (state) => state.count * 2
  },
  actions: {
    addFilter(type, value) {
      let containsKey = this.selectedFilters.some((obj) => (obj.type = type))
      if (!containsKey) {
        this.selectedFilters.push({
          type,
          value
        })
      }
    }
  }
})
