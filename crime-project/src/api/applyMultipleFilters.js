import getAllData from './getAllData'
import {
  getAllOfMatchingAgeGroup,
  getAllOfMatchingBorough,
  getAllOfMatchingCrime,
  getAllOfMatchingSex,
  getAllOfMatchingRace
} from './dataFilters'

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
        dataset = getAllOfMatchingSex(dataset, filter.value)
    }
  })

  return dataset
}

// const test_dataset = [
//   {
//     type: 'race',
//     value: 'white'
//   },
//   {
//     type: 'ageGroup',
//     value: '18-24'
//   }
// ]
