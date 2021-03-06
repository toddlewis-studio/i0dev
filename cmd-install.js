const fs = require('fs').promises
const START = new Date()

const isWin = process.platform === "win32";
const osPath = path => isWin ? path.split('/').join('\\') : path

/* all commands should be run from the dev folder except for the project command */

const runPath = process.cwd() + ''
const last = runPath.substring(runPath.length - 4, runPath.length)
if(last !== '/dev' && last !== '\\dev')
    return console.error('i0 error: Command must be ran within the dev folder.')

const projectPath = runPath.substring(0, runPath.length - 4)

const { exec } = require('child_process')
console.log(`starting install...`)
const child = exec(`cd ${projectPath + osPath('/build')} && npm i && cd ${runPath}`, (err, out, derr) => {
    console.log('install complete', new Date() - START)
})

module.exports = {}