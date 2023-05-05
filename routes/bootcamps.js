const express = require('express')
const router = express.Router()
const {
  getBootcamp,
  getBootcamps,
  postBootcamp,
  putBootcamp,
  deleteBootcamp,
} = require('../controllers/bootcamps')

router.get('/', (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: 'Show all bootcamps' })
})

router.get('/:id', (req, res) => {
  res.status(200).json({
    success: true,
    msg: `get bootcamp:${req.params.id}`,
  })
})

router.post('/', (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: 'create bootcamp' })
})

router.put('/:id', (req, res) => {
  res.status(200).json({
    success: true,
    msg: `upd bootcamp ${req.params.id}`,
  })
})

router.delete('/:id', (req, res) => {
  res.status(200).json({
    success: true,
    msg: `dlt bootcamp ${req.params.id}`,
  })
})

module.exports = router
