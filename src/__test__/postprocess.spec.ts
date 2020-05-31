import {getLocationsFromArgv} from '../utils/postprocess'

describe('Test Post Process functions', () => {
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
