export const removeTrailingSlashIfNeeded = str => {
  if (str.slice(-1) === '/') return str.slice(0, -1)
  return str
}
