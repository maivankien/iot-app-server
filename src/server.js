require("dotenv").config()
const express = require("express")
const cors = require("cors")
const route = require("./routers/index.js")

const mqttClient = require('./config/mqtt.js')
const handleEvent = require('./mqtt/handleEvent.js')
const energyCron = require('./schedule/energy.cron.js')
const setupSchedule = require('./schedule/setup.schedule.js')

const app = express()
const port = process.env.PORT
const hostname = process.env.HOST_NAME

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

route(app)

setupSchedule()
energyCron.scheduleJobs()

    ; (async () => {
        try {
            app.listen(port, hostname, () => {
                handleEvent(mqttClient)
                console.log(`Backend Nodejs listening on port ${port}`)
            })
        } catch (error) {
            console.log('Server Error:>> ', error)
        }
    })()