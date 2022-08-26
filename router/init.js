const Koa = require("koa");
const app = new Koa();

//配置解析请求体中间件
const bodyParser = require("koa-bodyparser");
app.use(bodyParser());

//设置跨越
const cors = require("@koa/cors");
app.use(cors());

//导入api路径文件
const pageRouter = require("./api/page");

//处理api请求
app.use(pageRouter.routes());
//查看方法有没有实现，例如只配置了post方法但是get方法进行访问就是错误的
app.use(pageRouter.allowedMethods());

app.listen(9527, () => {
  console.log("9527 server listening....");
});
