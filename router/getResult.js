exports.getErr = function (msg = "error", code = 400) {
  return {
    code,
    msg,
  };
};
exports.getResult = function (data, msg = "success", code = 200) {
  return {
    code,
    msg,
    data,
  };
};
