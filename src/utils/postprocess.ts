export const getLocationsFromArgv = (argv: string[]): string[] => {
  const listOflocations = argv.slice(2)
  const strLocations = listOflocations.join(' ')
  const locations = strLocations.split(',')

  return locations.map(i => i.trim())
}

export const validateLocations = (locations: string[]): string[] => {
  if (!locations.length || (locations.length === 1 && !locations[0])) {
    throw 'NO LOCATION ENTERED'
  }

  return locations
}
