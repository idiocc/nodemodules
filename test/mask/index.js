import { makeTestSuite } from 'zoroaster'
import Context from '../context'
import nodemodules from '../../src'

const ts = makeTestSuite('test/result', {
  async getResults(input) {
    const res = await nodemodules({
      text: input,
    })
    return res
  },
  context: Context,
})

// export default ts
