import applyFilters from '@/api/applyMultipleFilters.js'
import getAllData from '@/api/getAllData.js'
import decompressData from '@/api/decompressData.js'
const crime_data = await getAllData()
const filters = [
  {
    type:'arrest_boro',
    values:['B','K','M','Q','S'],
  }
]
let filterType = []
filters.forEach((obj)=>filterType.push(obj.type))
const filteredData = await applyFilters(crime_data,filters)
const decompressedData = decompressData(filteredData, filterType)
console.log(decompressedData)
export const data = {
  labels: ['Bronx','Staten Island','Brooklyn','Queens','Manhattan'],
  datasets: [
    {
      label: 'Arrests',
      backgroundColor: 'rgba(179,181,198,0.2)',
      borderColor: 'rgba(179,181,198,1)',
      pointBackgroundColor: 'rgba(179,181,198,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(179,181,198,1)',
      data: Object.values(decompressedData),
    }
  ]
}
export const options = {
  responsive: true,
  maintainAspectRatio: false
}
