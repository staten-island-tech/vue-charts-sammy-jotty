import applyFilters from '@/api/applyMultipleFilters.js'
import getAllData from '@/api/getAllData.js'
import decompressData from '@/api/decompressData.js'
const crime_data = await getAllData()
const filters = [
  {
    type:'arrest_date',
    values:['2023-01','2023-02','2023-03','2023-04','2023-05','2023-06','2023-07','2023-08','2023-09','2023-10','2023-11','2023-12'],
  }
]

const filteredData = await applyFilters(crime_data,filters)
const decompressedData = decompressData(filteredData, 'arrest_date')
console.log(decompressedData)
export const data = {
  labels: [],
  datasets: [
    {
      label: 'Arrests',
      backgroundColor: '#f87979',
      data: Object.values(decompressedData),
    }
  ]
}
filters.forEach((filter)=>filter.values.forEach((value)=>data.labels.push(value)))
export const options = {
  responsive: true,
  maintainAspectRatio: false
}
