export const getCurrentDateTime = (timezone: number): string => {
  const date = new Date()
  const timeOffset = timezone + date.getTimezoneOffset() * 60
  const currentDateTime = new Date(date.getTime() + (timeOffset * 1000))
  return currentDateTime.toString()
}
