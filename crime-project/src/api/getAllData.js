const URL = 'https://data.cityofnewyork.us/resource/uip8-fykc.json'

export default async function getAllData() {
  const response = await fetch(URL)
  const data = await response.json()
  return data
}
