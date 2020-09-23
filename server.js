const app = require('./src/app')

const PORT = 8080

app.listen(PORT, () => {
    console.log("Application running on port " + PORT)
})