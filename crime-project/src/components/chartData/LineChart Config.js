import applyFilters from '../../api/applyMultipleFilters.js'
import getAllData from '../../api/getAllData.js'
const crime_data = await getAllData()
const filters = [
  {
    type:'arrest_date',
    values:['2023-01','2023-02','2023-03','2023-04','2023-05','2023-06','2023-07','2023-08','2023-09','2023-10','2023-11','2023-12'],
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
