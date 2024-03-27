import applyFilters from '@/api/applyMultipleFilters.js'
import getAllData from '@/api/getAllData.js'
import decompressData from '@/api/decompressData.js'
const crime_data = await getAllData()
const filters = [
  {
    type:'age_group',
    values:['18-24','25-44','45-64','65+'],
  }
]
let filterType = []
filters.forEach((obj)=>filterType.push(obj.type))
const filteredData = await applyFilters(crime_data,filters)
const decompressedData = decompressData(filteredData, filterType)

export const data = {
  labels: Object.keys(decompressedData),
  datasets: [
    {
      label:['Arrests'],
      backgroundColor: ['#E16651','#D22255','#B33655','#216655','#531151','#A13655','#000000'],
      data: Object.values(decompressedData),
    },
    
  ]
}
export const options = {
  responsive: true,
  maintainAspectRatio: false
}
