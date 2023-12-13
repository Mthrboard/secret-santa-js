import formatRelative from 'date-fns/formatRelative'

export const prettifyDate = (dateString: string) => {
  const date = new Date(dateString)
  const baseDate = new Date()
  return formatRelative(date, baseDate)
}

export const formatDateFromDbForInput = (dateString: string) => {
  const date = new Date(dateString)
  return date.toISOString().split('T')[0]
}
