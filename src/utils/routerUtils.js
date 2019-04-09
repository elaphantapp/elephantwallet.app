import { createBrowserHistory } from 'history'

const genHistory = () => {
  if (typeof document !== 'undefined') {
    return createBrowserHistory()
  }
  return {}
}

export default genHistory()
