import applyFilters from '@/api/applyMultipleFilters.js'
import getAllData from '@/api/getAllData'
responseData = await getAllData()

filters = [
  {
    perp_race: 'White'
  }
]

let dataset = applyFilters(responseData, filters)

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
