import getAllDataByMonth from '@/api/getAllDataByMonth.js'
const crime_data = await getAllDataByMonth()
let count = []
crime_data.forEach((obj)=>count.push(obj.count))
export const data = {
  labels: ['Jan 2023','Feb 2023','Mar 2023','Apr 2023','May 2023','Jun 2023','Jul 2023','Sep 2023','Oct 2023','Nov 2023','Dec 2023'],
  datasets: [
    {
      label:['Arrests'],
      backgroundColor: ['#E16651'],
      data: count,
    },
    
  ]
}
export const options = {
  responsive: true,
  maintainAspectRatio: false
}
