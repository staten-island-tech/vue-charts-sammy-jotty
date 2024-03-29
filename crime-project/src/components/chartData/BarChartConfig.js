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

let filterType = []
filters.forEach((obj)=>filterType.push(obj.type))
const filteredData = await applyFilters(crime_data,filters)
const decompressedData = decompressData(filteredData, filterType)
console.log(Object.values(decompressedData))
export const data = {
    labels: Object.keys(decompressedData),
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