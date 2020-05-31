describe('Sanity check', () => {
  it('should pass', () => {
    expect(true).toBe(true)
  })

  it('should fail', () => {
    expect(true).not.toBe(false)
  })
})
