const Koa = require('koa')

const app = new Koa()

const server = require('http').Server(app.callback())

const io = require('socket.io')(server)

const port = 3001

server.listen(process.env.PORT || port, () => {
  console.log(`ws server run at: http://127.0.0.1:${port}`)
})

io.on('connection', socket => {
  socket.on('send', data => {
    console.log('来自于客户端的消息：', data)
    socket.emit('response', '返回的消息')
  })
})

app.use(async ctx => {
  ctx.body = {
    greeting: 'Hello World2'
  }
})

app.listen(3000)