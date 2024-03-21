import applyFilters from '@/api/applyMultipleFilters.js'
import getAllData from '@/api/getAllData.js'
import decompressData from '@/api/decompressData.js'
const crime_data = await getAllData()

const filters = [
  {
    type: 'age_group',
    values: ['18-24', '25-44', '45-64']
  }
]

const filteredData = await applyFilters(crime_data, filters)
const decompressedData = decompressData(filteredData, 'age_group')
console.log(decompressedData)
export const data = {
  labels: [],
  datasets: [
    {
      label: 'Arrests',
      backgroundColor: 'rgba(179,181,198,0.2)',
      borderColor: 'rgba(179,181,198,1)',
      pointBackgroundColor: 'rgba(179,181,198,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(179,181,198,1)',
      data: Object.values(decompressedData)
    }
  ]
}
filters.forEach((filter) => filter.values.forEach((value) => data.labels.push(value)))
export const options = {
  responsive: true,
  maintainAspectRatio: false
}
