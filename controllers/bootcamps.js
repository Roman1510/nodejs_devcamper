const Bootcamp = require('../models/Bootcamp')

// @desc get all bootcamps
// @route GET /api/v1/bootcamps
// @access public
exports.getBootcamps = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamp.find()
    res.status(200).json({
      success: true,
      data: bootcamps,
    })
  } catch (err) {
    res.status(400).json({
      success: false,
    })
  }
}

// @desc get a bootcamp by ID
// @route GET /api/v1/bootcamps/:id
// @access public
exports.getBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id)
    if (!bootcamp) {
      return res.status(400).json({
        success: false,
      })
    }
    res.status(200).json({
      success: true,
      data: bootcamp,
    })
  } catch (err) {
    res.status(400).json({
      success: false,
    })
  }
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
exports.createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body)
    res.status(201).json({
      success: true,
      data: bootcamp,
    })
  } catch (err) {
    res.status(400).json({
      success: false,
    })
  }
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
