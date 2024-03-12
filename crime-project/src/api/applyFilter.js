export default function applyFilter(dataset, filter, values) {
  // console.log(values)
  const matchingData = dataset.filter((incident) => {
    if (incident[filter]) {
      return values.some((value) => {
        return incident[filter].toLowerCase().includes(value.toLowerCase())
      })
    } else {
      return false
    }
  })
  return matchingData
}
