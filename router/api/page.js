const Router = require("koa-router");
const router = new Router({ prefix: "/api/page" });
const Page = require("../../models/Page");
const { getResult } = require("../getResult");

//获取Page
router.get("/:id", async (ctx, next) => {
  const data = await Page.getPageById(ctx.params.id);
  ctx.body = getResult(data);
});
//添加Page，请求格式为application/json
router.post("/", async (ctx, next) => {
  const data = await Page.addPage(ctx.request.body.pageValue);
  ctx.body = getResult(data);
});
module.exports = router;
