import express from express

const app = express()
const port = process.env.PORT
const hostname = process.env.HOST_NAME

    ; (async () => {
        try {
            app.listen(port, hostname, () => {
                console.log(`Backend Nodejs listening on port ${port}`)
            })
        } catch (error) {
            console.log('Server Error:>> ', error)
        }
    })