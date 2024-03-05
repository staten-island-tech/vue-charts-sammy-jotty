// import getAllData from './getAllData.js'

export default async function getAllOfMatchingCrime(dataset, crime) {
  const matchingData = dataset.filter((incident) =>
    incident.pd_desc.toLowerCase().includes(crime.toLowerCase())
  )
  return matchingData
}

// console.log(await getAllOfMatchingCrime(await getAllData(), 'MURDER'))
