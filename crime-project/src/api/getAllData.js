const URL = 'https://data.cityofnewyork.us/resource/uip8-fykc.json?$limit=226872'
/* &$select=date_extract_m(arrest_date) as month, count(*)&$group=month */
export default async function getAllData() {
  const response = await fetch(URL)
  const data = await response.json()
  console.log(data)
  return data
}
