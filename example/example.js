/* yarn example/ */
import nodemodules from '../src'

(async () => {
  const res = await nodemodules({
    text: 'example',
  })
  console.log(res)
})()