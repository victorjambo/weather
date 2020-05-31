export const getLocationsFromArgv = (argv: string[]): string[] => {
  const listOflocations = argv.slice(2)
  const strLocations = listOflocations.join(' ')
  const locations = strLocations.split(',')

  return locations.map(i => i.trim())
}
