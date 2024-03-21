import applyFilters from '@/api/applyMultipleFilters.js'
import getAllData from '@/api/getAllData.js'
import decompressData from '@/api/decompressData.js'
import filterOptions from '../filterOptions.js'
import { useFilterStore } from '@/stores/filterStore'

export async function formatData(type, data, filters) {
  const values = filterOptions[type]
  const filteredData = await applyFilters(data, filters)
  const decompressedData = decompressData(filteredData)
  return {
    labels: filters[0].values,
    datasets: [
      {
        label: ['Arrests'],
        backgroundColor: ['#E46651', '#246655', '#E33655'],
        data: Object.values(decompressedData)
      }
    ]
  }
}

export const options = {
  responsive: true,
  maintainAspectRatio: false
}
const filters = useFilterStore().selectedFilters
const data = await getAllData()
const type = 'age_group'
export default data = formatData(type, data, filters)
// const filters = [
//   {
//     type: 'age_group',
//     values: ['18-24', '25-44', '45-64']
//   }
// ]

// const filteredData = await applyFilters(crime_data, filters)
// const decompressedData = decompressData(filteredData, 'age_group')
// console.log(Object.values(decompressedData))
// export const data = {
//   labels: [],
//   datasets: [
//     {
//       label: ['Arrests'],
//       backgroundColor: ['#E46651', '#246655', '#E33655'],
//       data: Object.values(decompressedData)
//     }
//   ]
// }
// filters.forEach((filter) => filter.values.forEach((value) => data.labels.push(value)))
