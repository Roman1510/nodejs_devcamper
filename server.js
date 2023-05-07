const express = require('express')
const dotenv = require('dotenv')
const bootcamps = require('./routes/bootcamps') // routing file
// const logger = require('./middleware/logger')
const morgan = require('morgan')

dotenv.config({ path: './config/config.env' }) //env variabls

const app = express()

//check if we're no dev
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

//mounting routers
app.use('/api/v1/bootcamps', bootcamps)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `server running on ${process.env.NODE_ENV} on port ${PORT}`
  )
)
