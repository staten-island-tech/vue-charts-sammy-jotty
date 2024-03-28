const URL = 'https://data.cityofnewyork.us/resource/uip8-fykc.json?$limit=1000'
export default async function getData() {
  const response = await fetch(URL)
  const data = await response.json()
  console.log(data)
  return data
}
