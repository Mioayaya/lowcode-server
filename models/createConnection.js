const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/lowcodedb");

mongoose.connection.on("open", () => {
  console.log("mongodb已连接...");
});
