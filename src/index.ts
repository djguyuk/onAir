
import * as link from './prolink'

const speaker = '🔊'
console.log(`OnAir is ready ${speaker}`)
console.log(`connecting to CDJ...`)
const cdj = new link.VirtualCdj('en0', 3)

// console.dir(cdj)
console.log('waiting 10 seconds...')
setTimeout(() => console.dir(cdj), 10000)
