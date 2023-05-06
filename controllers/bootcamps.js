// @desc get all bootcamps
// @route GET /api/v1/bootcamps
// @access public
exports.getBootcamps = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: 'Show all bootcamps' })
}

// @desc get a bootcamp by ID
// @route GET /api/v1/bootcamps/:id
// @access public
exports.getBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `get bootcamp:${req.params.id}`,
  })
}

// @desc change a bootcamp
// @route PUT /api/v1/bootcamps/:id
// @access private
exports.updateBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `upd bootcamp ${req.params.id}`,
  })
}

// @desc create a bootcamp
// @route POST /api/v1/bootcamps
// @access public
exports.createBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: 'create bootcamp' })
}

// @desc delete a bootcamp by ID
// @route DELETE /api/v1/bootcamps/:id
// @access private
exports.deleteBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `dlt bootcamp ${req.params.id}`,
  })
}
