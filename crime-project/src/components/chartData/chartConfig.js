import applyFilters from '../../api/applyMultipleFilters.js'
import getAllData from '../../api/getAllData.js'
const crime_data = await getAllData()
const filtersObj = [
  {
    type:'age_group',
    values:['18-24','25-44','45-64']
  }
]

const filters = filtersObj.forEach((value)=>value.values.forEach((filters)=>filters))
const filteredData = await applyFilters(crime_data,filters)


export const data = {
  labels: [],
  datasets: [
    {
      label:['Arrests'],
      backgroundColor: ['#E46651','#246655','#E33655'],
      data: [filteredData.length,filteredData.length,filteredData.length]
    },
    
  ]
}
filtersObj.forEach((filter)=>filter.values.forEach((value)=>data.labels.push(value)))
/* data.data.push(filteredData.length) */
export const options = {
  responsive: true,
  maintainAspectRatio: false
}
