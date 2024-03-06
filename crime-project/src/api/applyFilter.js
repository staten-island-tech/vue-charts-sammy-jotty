export default function applyFilter(dataset, filter, value) {
  const matchingData = dataset.filter((incident) => {
    return incident[filter].toLowerCase().includes(value.toLowerCase())
  })
  return matchingData
}
