// Note: Age groups are 18-24, 25-44, 45-64, 65+
export async function getAllOfMatchingAgeGroup(dataset, age_group) {
  const matchingData = dataset.filter((incident) =>
    incident.age_group.toLowerCase().includes(age_group.toLowerCase())
  )
  return matchingData
}

// Note: Boroughs are initils: Ex: Brooklyn is B, T
export async function getAllOfMatchingBorough(dataset, borough) {
  const matchingData = dataset.filter((incident) =>
    incident.arrest_boro.toLowerCase().includes(borough.toLowerCase())
  )
  return matchingData
}

export async function getAllOfMatchingCrime(dataset, crime) {
  const matchingData = dataset.filter((incident) =>
    incident.pd_desc.toLowerCase().includes(crime.toLowerCase())
  )
  return matchingData
}

export async function getAllOfMatchingRace(dataset, race) {
  const matchingData = dataset.filter((incident) =>
    incident.perp_race.toLowerCase().includes(race.toLowerCase())
  )
  return matchingData
}

// Note: Sex is initial: M or F
export async function getAllOfMatchingSex(dataset, sex) {
  const matchingData = dataset.filter((incident) =>
    incident.perp_sex.toLowerCase().includes(sex.toLowerCase())
  )
  return matchingData
}
