import getAllData from './getAllData.js'
import applyFilters from './applyMultipleFilters.js'

export default function decompressData(data, filter) {
  const decompressed = {}
  data.forEach((incident) => {
    decompressed[incident[filter]] = (decompressed[incident[filter]] || 0) + 1
  })
  console.log(decompressed)
}

const test_filters = [
  {
    type: 'perp_race',
    values: ['asian', 'white']
  }
]

const data = await getAllData()
const filteredData = applyFilters(data, test_filters)
const decompressedData = decompressData(filteredData, 'age_group')
