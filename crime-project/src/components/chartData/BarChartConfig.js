import applyFilters from '@/api/applyMultipleFilters.js'
import getAllData from '@/api/getAllData.js'
import decompressData from '@/api/decompressData.js'
const crime_data = await getAllData()
const filters = [
  {
    type:'age_group',
    values:['18-24','25-44','45-64'],
  }
]

const filteredData = await applyFilters(crime_data,filters)
const decompressedData = decompressData(filteredData, 'age_group')
console.log(Object.values(decompressedData))
export const data = {
    labels: [],
    datasets: [
      {
        label: 'Arrests',
        backgroundColor: '#f87979',
        data: Object.values(decompressedData)
      }
    ]
  }
  
  export const options = {
    responsive: true,
    maintainAspectRatio: false
  }
filters.forEach((filter)=>filter.values.forEach((value)=>data.labels.push(value)))