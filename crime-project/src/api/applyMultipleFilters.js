import getAllData from './getAllData.js'
import applyFilter from './applyFilter.js'

export default function applyFilters(initial_dataset, filters) {
  let dataset = initial_dataset
  filters.forEach((filter) => {
    dataset = applyFilter(dataset, filter.type, filter.value)
  })

  return dataset
}

const test_filters = [
  {
    type: 'perp_race',
    value: 'black'
  },
  {
    type: 'age_group',
    value: '18-24'
  },
  {
    type: 'pd_desc',
    value: 'robbery'
  }
]

const data = await getAllData()
const filteredData = applyFilters(data, test_filters)

console.log(filteredData)
