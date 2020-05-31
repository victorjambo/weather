import * as utf8 from 'utf8'

export const getLocationsFromArgv = (argv: string[]): string[] => {
  const locationsFromArgv = argv.slice(2)
  const locationsInStrBlock = locationsFromArgv.join(' ')
  const listOflocations = locationsInStrBlock.split(',')
  const trimmedLocations = trimString(listOflocations)
  const locations = convertStringToUTF(trimmedLocations)

  return locations
}

export const trimString = (locations: string[]): string[] => {
  return locations.map(location => location.trim())
}

export const convertStringToUTF = (locations: string[]): string[] => {
  return locations.map(location => utf8.encode(location))
}

export const validateLocations = (locations: string[]): string[] => {
  if (!locations.length || (locations.length === 1 && !locations[0])) {
    throw 'NO LOCATION ENTERED'
  }

  return locations
}
