import applyFilters from '../../api/applyMultipleFilters.js'
import getAllData from '../../api/getAllData.js'
const crime_data = await getAllData()
console.log
const filters = [
  {
    type: 'arrest_date',
    values: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10','11','12'],
  },
]

const arrests = []
crime_data.forEach((obj)=>arrests.push(obj.arrest_date))
Filters.forEach((el))
const dataset = []
arrests.forEach((el)=>el.includes())
export const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December'],
    datasets: [
      {
        label: 'Arrests',
        backgroundColor: '#f87979',
        data: [dataset.length],
      }
    ]
  }
  
  export const options = {
    responsive: true,
    maintainAspectRatio: false
  }
