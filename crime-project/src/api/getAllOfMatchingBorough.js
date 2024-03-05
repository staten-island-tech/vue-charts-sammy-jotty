// import getAllData from './getAllData.js'

// Note: Boroughs are initils: Ex: Brooklyn is B, T
export default async function getAllOfMatchingBorough(dataset, borough) {
  const matchingData = dataset.filter((incident) =>
    incident.arrest_boro.toLowerCase().includes(borough.toLowerCase())
  )
  return matchingData
}

// console.log(await getAllOfMatchingCrime(await getAllData(), 'MURDER'))
