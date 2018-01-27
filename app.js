const app = require('./server.js').app
const PORT = require('./server.js').PORT


app.listen(PORT, () => {
    console.log(`server started on https://localhost:${PORT}`)
})