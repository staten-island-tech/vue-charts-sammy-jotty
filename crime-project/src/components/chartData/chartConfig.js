import applyFilters from '../../api/applyMultipleFilters.js'
import getAllData from '../../api/getAllData.js'
const crime_data = await getAllData()
const filters = [{
  type:'perp_race',
  value:'black',
}]
const filteredData = await applyFilters(crime_data,filters)

const labels = []

filters.forEach((filter)=>labels.push(filter.value))
export const data = {
  labels: [labels],
  datasets: [
    {
      label:['Arrests'],
      backgroundColor: ['#E46651','#246655'],
      data: [filteredData.length]
    },
  ]
}

export const options = {
  responsive: true,
  maintainAspectRatio: false
}
