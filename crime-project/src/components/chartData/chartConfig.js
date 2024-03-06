import {applyFilters} from '@/api/applyMultipleFilters.js'
function dataIndex(){
  let chartData = data.data
  
}

export const data = {
    labels: filters,
    datasets: [
      {
        backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
        data: []
      }
    ]
  }
  
  export const options = {
    responsive: true,
    maintainAspectRatio: false
  }