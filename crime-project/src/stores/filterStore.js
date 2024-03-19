import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

function removeFirstOfType(array, filterString) {
  const memberToRemove = array.find((element) => {
    return element.type === filterString
  })
  array.splice(array.indexOf(memberToRemove), 1)
}

export const useFilterStore = defineStore('filterStore', {
  state: () => ({
    selectedFilters: []
  }),
  actions: {
    addFilterFromSelect(type, value) {
      if (this.selectedFilters.some((filter) => filter.type === type)) {
        removeFirstOfType(this.selectedFilters, type)
      }
      this.selectedFilters.push({
        type,
        value
      })
      console.log(JSON.parse(JSON.stringify(this.selectedFilters)))
    },
    addFilterFromCheckbox(type, value) {
      // this.selectedFilters.forEach((filter) => {
      //   if (filter.type === type) {
      //     this.selectedFilters.splice(this.selectedFilters.indexOf(filter), 1)
      //   }
      // })
      if (this.selectedFilters.some((filter) => filter.type === type)) {
        removeFirstOfType(this.selectedFilters, type)
      }
      this.selectedFilters.push({
        type,
        value
      })
      console.log(JSON.parse(JSON.stringify(this.selectedFilters)))
    }
  }
})
