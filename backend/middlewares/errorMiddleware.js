const handleError = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  const status = statusCode.toString().startsWith("4") ? "fail" : "error";
  res.status(statusCode);

  res.json({
    status: status,
    message: err.message,
    stack: err.stack,
  });
};

module.exports = handleError;
