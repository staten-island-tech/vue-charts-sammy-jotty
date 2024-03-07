import applyFilters from '@/api/applyMultipleFilters.js'
import getAllData from '@/api/getAllData'
const crime_data = await getAllData()

const filters = [
  {
    type: 'perp_race',
    value: 'white'
  }
]

export const data = {
  labels: ['White', 'Black'],
  datasets: [
    {
      label:['Arrests'],
      backgroundColor: ['#E46651','#246655'],
      data: [40,10]
    },
  ]
}

export const options = {
  responsive: true,
  maintainAspectRatio: false
}
