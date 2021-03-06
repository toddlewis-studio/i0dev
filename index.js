#!/usr/bin/env node

const fs = require('fs').promises
const isWin = process.platform === "win32";
const osPath = path => isWin ? path.split('/').join('\\') : path

const args = [...process.argv]
args.shift()
args.shift()

const command = args[0]

switch(command){
    case 'build': return require(osPath('./cmd-build'))
    case 'firebase': return require(osPath('./cmd-firebase'))
    case 'install': return  require(osPath('./cmd-install'))
    case 'run': return  require(osPath('./cmd-run'))
    case 'project': return  require(osPath('./cmd-project'))
    case 'refresh': return  require(osPath('./cmd-refresh'))
}