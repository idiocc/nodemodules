import { equal, ok } from 'zoroaster/assert'
import Context from '../context'
import nodemodules from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof nodemodules, 'function')
  },
  async 'calls package without error'() {
    await nodemodules()
  },
  async 'gets a link to the fixture'({ FIXTURE }) {
    const res = await nodemodules({
      text: FIXTURE,
    })
    ok(res, FIXTURE)
  },
}

export default T