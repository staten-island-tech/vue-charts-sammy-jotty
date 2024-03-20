import applyFilters from '@/api/applyMultipleFilters.js'
import getAllData from '@/api/getAllData.js'
import decompressData from '@/api/decompressData.js'
const crime_data = await getAllData()
const filters = [
  {
    type:'perp_race',
    values:['black','unknown','asian','white','american indian'],
  }
]

const filteredData = await applyFilters(crime_data,filters)
const decompressedData = decompressData(filteredData, 'perp_race')
console.log(decompressedData)
export const data = {
  labels: Object.keys(decompressedData),
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
