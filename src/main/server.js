var Koa = require('koa');
var Router = require('koa-router');

var app = new Koa();
var router = new Router();

router.get('/api/test', (ctx, next) => {

  ctx.body = {
    success: true,
    data: [{
      name: 'zero'
    }, {
      name: 'one'
    }, {
      name: 'two'
    }, {
      name: 'three'
    }]
  };

});

app
  .use(router.routes())
  .use(router.allowedMethods());

const PORT = process.env.PORT || 3333;

app.listen(PORT);
console.log(`Koa listening on port ${PORT}`);
