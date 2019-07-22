
import * as link from './prolink'

const speaker = '🔊'

console.log(`${link}`)
console.log(`OnAir is ready ${speaker}`)
console.log(`connecting to CDJ...`)
const cdj = new link.VirtualCdj('192.168.1.184', 1)
console.dir(cdj)
// setTimeout(() => console.dir(cdj), 10000)
