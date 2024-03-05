// import getAllData from './getAllData.js'

// Note: Age groups are 18-24, 25-44, 45-64, 65+
export default async function getAllOfMatchingAgeGroup(dataset, age_group) {
  const matchingData = dataset.filter((incident) =>
    incident.age_group.toLowerCase().includes(age_group.toLowerCase())
  )
  return matchingData
}

// console.log(await getAllOfMatchingCrime(await getAllData(), 'MURDER'))
