const config = require('../config')
const server = require('../server/main-prod')
const debug = require('debug')('app:bin:server')
const port = 1337;

server.listen(port)
debug(`Server is now running at http://localhost:${port}.`)
