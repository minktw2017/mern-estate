export const signup = (req, res) => {
  console.log(req.body);
  res.json({
    message: "Successed",
    success: true
  })
}