
export interface StatesData {
  "districtData": Map<string, DistrictData>,
  "statecode": string
}

export interface DistrictData {
  "notes": string,
  "active": number,
  "confirmed": number,
  "deceased": number,
  "recovered": number,
}

export interface IndiaData {
  "statewise": StateWiseData[]
}

export interface StateWiseData {
  "active": string,
  "confirmed": string,
  "deaths": string,
  "deltaconfirmed": string,
  "deltadeaths": string,
  "deltarecovered": string,
  "lastupdatedtime": string,
  "migratedother": string,
  "recovered": string,
  "state": string,
  "statecode": string,
  "statenotes": string
}