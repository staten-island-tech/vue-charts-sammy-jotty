import { config } from 'dotenv'
config()
const URL = process.env.API_URL

export default async function getAllData() {
  const response = await fetch(URL)
  const data = await response.json()
  return data
}
