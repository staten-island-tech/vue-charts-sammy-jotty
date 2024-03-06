import getAllData from './getAllData.js'
import applyFilter from './applyFilter.js'

export default function applyFilters(initial_dataset, filters) {
  let dataset = initial_dataset
  filters.forEach((filter) => {
    dataset = applyFilter(dataset, filter.type, filter.value)
  })

  return dataset
}