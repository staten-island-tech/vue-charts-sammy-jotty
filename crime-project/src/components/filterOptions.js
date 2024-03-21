// // export default [
// //   {
// //     type: 'perp_race',
// //     options: ['White', 'Black']
// //   }
// // ]

// import fs from 'node:fs'
// import getAllData from '../api/getAllData.js'

// const allOptions = {}
// async function getAllOptions(type) {
//   const data = await getAllData()
//   const types = []
//   data.forEach((incident) => {
//     if (!types.includes(incident[type])) {
//       types.push(incident[type])
//     }
//   })
//   allOptions[type] = types
// }
// await getAllOptions('perp_race')
// await getAllOptions('age_group')
// await getAllOptions('ofns_desc')
// await getAllOptions('arrest_boro')
// await getAllOptions('perp_sex')

// console.log(allOptions)

const options = {
  perp_race: [
    'BLACK',
    'WHITE',
    'WHITE HISPANIC',
    'BLACK HISPANIC',
    'ASIAN / PACIFIC ISLANDER',
    'UNKNOWN',
    'AMERICAN INDIAN/ALASKAN NATIVE'
  ],
  age_group: ['18-24', '25-44', '<18', '45-64', '65+'],
  ofns_desc: [
    'ROBBERY',
    'FELONY ASSAULT',
    'BURGLARY',
    'ARSON',
    'CRIMINAL TRESPASS',
    'ASSAULT 3 & RELATED OFFENSES',
    'RAPE',
    'FORGERY',
    'PETIT LARCENY',
    'SEX CRIMES',
    'THEFT-FRAUD',
    'JOSTLING',
    'MISCELLANEOUS PENAL LAW',
    'VEHICLE AND TRAFFIC LAWS',
    'FRAUDS',
    'OFFENSES INVOLVING FRAUD',
    'OTHER OFFENSES RELATED TO THEF',
    'DANGEROUS WEAPONS',
    'DANGEROUS DRUGS',
    'MURDER & NON-NEGL. MANSLAUGHTE',
    'CRIMINAL MISCHIEF & RELATED OF',
    'OTHER STATE LAWS (NON PENAL LA',
    'OFFENSES AGAINST THE PERSON',
    'INTOXICATED & IMPAIRED DRIVING',
    'OFFENSES AGAINST PUBLIC ADMINI',
    'NYS LAWS-UNCLASSIFIED FELONY',
    'GRAND LARCENY',
    'CANNABIS RELATED OFFENSES',
    'GRAND LARCENY OF MOTOR VEHICLE',
    'POSSESSION OF STOLEN PROPERTY',
    'OTHER STATE LAWS',
    'OFF. AGNST PUB ORD SENSBLTY &',
    'FOR OTHER AUTHORITIES',
    'UNAUTHORIZED USE OF A VEHICLE',
    'OTHER TRAFFIC INFRACTION',
    "BURGLAR'S TOOLS",
    'ALCOHOLIC BEVERAGE CONTROL LAW',
    'KIDNAPPING & RELATED OFFENSES',
    'INTOXICATED/IMPAIRED DRIVING',
    'FELONY SEX CRIMES',
    'THEFT OF SERVICES',
    'ADMINISTRATIVE CODE'
  ],
  arrest_boro: ['B', 'S', 'K', 'Q', 'M'],
  perp_sex: ['M', 'F', 'U']
}
export default options
