// import fs from 'node:fs/promises'

// const readPjson = async () => {
//     const pjsonPath = new URL('./package.json', import.meta.url).pathname

//     return JSON.parse(await fs.readFile(pjsonPath, 'utf-8'))
// }

// readPjson();

import fs from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

const readPjson = async () => {
    const pjsonPath = fileURLToPath(new URL('./package.json', import.meta.url))

    return JSON.parse(await fs.readFile(pjsonPath, 'utf-8'))
}

readPjson();


const writeFile = async () => {
    const newFile = fileURLToPath(new URL('./demo.js', import.meta.url))

    await fs.writeFile(newFile, `console.log("Hello new file")`)
}

writeFile();