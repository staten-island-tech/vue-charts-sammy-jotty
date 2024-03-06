import getAllData from './getAllData.js'
import {
  getAllOfMatchingAgeGroup,
  getAllOfMatchingBorough,
  getAllOfMatchingCrime,
  getAllOfMatchingSex,
  getAllOfMatchingRace
} from './applyFilter.js'

export default function applyFilters(initial_dataset, filters) {
  let dataset = initial_dataset
  filters.forEach((filter) => {
    switch (filter.type) {
      case 'ageGroup':
        dataset = getAllOfMatchingAgeGroup(dataset, filter.value)
      case 'borough':
        dataset = getAllOfMatchingBorough(dataset, filter.value)
      case 'crime':
        dataset = getAllOfMatchingCrime(dataset, filter.value)
      case 'sex':
        dataset = getAllOfMatchingSex(dataset, filter.value)
      case 'race':
        dataset = getAllOfMatchingRace(dataset, filter.value)
    }
  })

  return dataset
}