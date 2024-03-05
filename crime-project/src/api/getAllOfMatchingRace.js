// import getAllData from './getAllData.js'

export default async function getAllOfMatchingRace(dataset, race) {
  const matchingData = dataset.filter((incident) =>
    incident.perp_race.toLowerCase().includes(race.toLowerCase())
  )
  return matchingData
}

// console.log(await getAllOfMatchingCrime(await getAllData(), 'MURDER'))
