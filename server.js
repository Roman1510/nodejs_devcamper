const express = require('express')
const dotenv = require('dotenv')
const bootcamps = require('./routes/bootcamps') // routing file
const morgan = require('morgan')
const errorHandler = require('./middleware/error')
const connectDB = require('./config/db')
dotenv.config({ path: './config/config.env' }) //env variabls

connectDB()

const app = express()

app.use(express.json())

//check if we're no dev
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

//mounting routers
app.use('/api/v1/bootcamps', bootcamps)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

const server = app.listen(
  PORT,
  console.log(`server running on ${process.env.NODE_ENV} on port ${PORT}`)
)

process.on('unhandledRejection', (error) => {
  console.error(`Unhandled rejection: ${error}`)
  server.close(() => process.exit(1))
})
