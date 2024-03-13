import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useFilterStore = defineStore('filterStore', {
  state: () => ({
    selectedFilters: []
  }),
  actions: {
    addFilterFromSelect(type, value) {
      let containsKey = this.selectedFilters.some((obj) => (obj.type = type))
      console.log(containsKey)
      if (!containsKey) {
        this.selectedFilters.push({
          type,
          value
        })
      }

      console.log(JSON.parse(JSON.stringify(this.selectedFilters)))
    },
    addFilterFromCheckbox(type, value) {
      // this.selectedFilters.forEach((filter) => {
      //   if (filter.type === type) {
      //     this.selectedFilters.splice(this.selectedFilters.indexOf(filter), 1)
      //   }
      // })

      this.selectedFilters.push({
        type,
        value
      })
      console.log(JSON.parse(JSON.stringify(this.selectedFilters)))
    }
  }
})
