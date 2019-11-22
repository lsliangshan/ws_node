const Koa = require('koa')

const app = new Koa()

app.use(async ctx => {
  ctx.body = {
    greeting: 'Hello World2'
  }
})

app.listen(3000)