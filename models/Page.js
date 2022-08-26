const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const pageSchema = new mongoose.Schema({
  pageValue: {
    type: String,
    required: true,
  },
});
pageSchema.statics.getPageById = function (id) {
  return this.find({ _id: id }, { _id: 0 });
};
pageSchema.statics.addPage = function (pageValue) {
  return this.create({ pageValue });
};
//删除用户
pageSchema.statics.removePage = function (id) {
  return this.deleteOne({ _id: id });
};
//修改用户
pageSchema.statics.updatePage = function (id, obj) {
  return this.updateOne({ _id: id }, obj);
};
module.exports = mongoose.model("Page", pageSchema);
