import { mergeDeepLeft } from 'ramda'

import * as attributes from './theme/index.js'

export function createTheme(config = {}) {
  let result = {}

  for (const name in attributes)
    if (config[name]) result = mergeDeepLeft(result, attributes[name][config[name]])

  return result
}
