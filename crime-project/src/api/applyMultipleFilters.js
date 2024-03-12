import getAllData from './getAllData.js'
import applyFilter from './applyFilter.js'

export default function applyFilters(initial_dataset, filters) {
  let dataset = initial_dataset
  filters.forEach((filter) => {
    if (filter.values) dataset = applyFilter(dataset, filter.type, filter.values)
  })

  return dataset
}

const test_filters = [
  {
    type: 'perp_race',
    values: ['asian', 'white']
  },
  {
    type: 'pd_desc',
    values: ['robbery']
  }
]

// const data = await getAllData()
// const filteredData = await applyFilters(data, test_filters)
// console.log(filteredData)
