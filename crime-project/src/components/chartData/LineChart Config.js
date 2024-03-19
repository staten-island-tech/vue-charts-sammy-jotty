import applyFilters from '../../api/applyMultipleFilters.js'
import getAllData from '../../api/getAllData.js'
const crime_data = await getAllData()
const filters = [
  {
    type:'age_group',
    values:['18-24','25-44','45-64'],
  }
]

const filteredData = await applyFilters(crime_data,filters)


export const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  datasets: [
    {
      label: 'Arrests',
      backgroundColor: '#f87979',
      data: [40, 39, 10, 40, 39, 80, 40]
    }
  ]
}

export const options = {
  responsive: true,
  maintainAspectRatio: false
}
