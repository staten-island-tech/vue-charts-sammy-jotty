export default function applyFilter(dataset, filter, value) {
  const matchingData = dataset.filter((incident) => {
    if (incident[filter]) {
      return incident[filter].toLowerCase().includes(value.toLowerCase())
    } else {
      return false
    }
  })
  return matchingData
}
