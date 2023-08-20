const http = require('http')
const pg = require('pg')

const hostname = '0.0.0.0'
const port = 3000


async function testQuery() {

  const client = new pg.Client({
    host: 'db',
    port: 5334,
    database: 'example',
    user: 'postgres',
    password: 'password',
  })

  const result = await client.query('SELECT NOW()')
  console.log('RESULT: ',result)

}


// HTTP Server
const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')

  console.log('URL', req.url)
  console.log(req.headers)

  var body = ""

  req.on('readable', function () {
    body += req.read()
  })


  req.on('end', function () {
    console.log(body)
    testQuery()
    res.end(`Hello World from TWO \n` + body)
  })


})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})