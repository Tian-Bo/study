const router = require('koa-router')()
const db = require('../sql/mysql.js')

router.prefix('/users')

router.get('/', async (ctx, next) => {
  ctx.body = await db.query(`select * from users`)
})

router.get('/posts', async (ctx, next) => {
  ctx.body = await db.query(`select * from posts`)
})

module.exports = router
