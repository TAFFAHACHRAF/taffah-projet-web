const errorHandling = (err, req, res, next) => {
  var status = undefined;
  if (err.message.includes("Already Exists")) res.status(409);
  if (err.message.includes("Already belong to")) res.status(409);
  if (err.message.includes("Doesn't belong to")) res.status(409);

  if (err.message.includes("not found")) {
    status = "Not Found";
    res.status(404);
  }
  if (err.message.includes("Doesn't Exists")) {
    status = "Not Found";
    res.status(404);
  }

  if (err.message.includes("incorrect")) res.status(401);
  if (err.message.includes("invalid")) res.status(401);
  if (err.message.includes("is missing")) res.status(401);

  return res.json({ status: status ? status : "Error", message: err.message });
};

module.exports = { errorHandling };
