const URL = 'https://data.cityofnewyork.us/resource/uip8-fykc.json?$limit=226872'
export default async function getAllData() {
  const response = await fetch(URL)
  const data = await response.json()
  console.log(data)
  return data
}
