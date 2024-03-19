import applyFilters from '@/api/applyMultipleFilters.js'
import getAllData from '@/api/getAllData.js'
const crime_data = await getAllData()

const filters = [
  {
    type: 'perp_race',
    value: 'white'
  }
]

let dataset = applyFilters(crime_data, filters)

export const data = {
  labels: filters,
  datasets: [
    {
      backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
      data: [40, 20, 80, 10]
    }
  ]
}

export const options = {
  responsive: true,
  maintainAspectRatio: false
}
