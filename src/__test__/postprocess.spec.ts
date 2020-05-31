import {getLocationsFromArgv, validateLocations} from '../utils/postprocess'

describe('Test Post Process functions getLocationsFromArgv', () => {
  const processArgv = [
    '/Users/node_modules/',
    '/Users/node_modules/',
    'nairobi,',
    'fiji,',
    'new',
    'york',
  ]

  it('should get locations from argv', () => {
    const expectedLocations = ['nairobi', 'fiji', 'new york']

    const locations = getLocationsFromArgv(processArgv)

    expect(locations).toEqual(expectedLocations)
  })

  it('should return empty when no location is entered', () => {
    const argvWithNoLocations = processArgv.splice(-2)

    const locations = getLocationsFromArgv(argvWithNoLocations)

    expect(locations).toEqual([''])
  })
})

describe('Test Post Process functions validateLocations', () => {
  it('should return location if no errors', () => {
    const locations = ['nairobi', 'fiji', 'new york']

    const validatedLocations = validateLocations(locations)

    expect(validatedLocations).toEqual(locations)
  })

  it('should throw error when no location is provided', () => {
    expect(() => validateLocations([''])).toThrowError()

    expect(() => validateLocations([''])).toThrow('NO LOCATION ENTERED')
  })
})
