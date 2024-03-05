// import getAllData from './getAllData.js'

// Note: Sex is initial: M or F
export default async function getAllOfMatchingSex(dataset, sex) {
  const matchingData = dataset.filter((incident) =>
    incident.perp_sex.toLowerCase().includes(sex.toLowerCase())
  )
  return matchingData
}

// console.log(await getAllOfMatchingCrime(await getAllData(), 'MURDER'))
