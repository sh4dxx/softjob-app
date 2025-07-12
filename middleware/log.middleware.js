export const userLog = (req, _, next) => {
  console.log({ method: req.method, params: req.params })
  next()
}
