const http = require('http')

const hostname = '0.0.0.0'
const port = 3000

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
    res.end(`Hello World from TWO \n` + body)
  })


})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})