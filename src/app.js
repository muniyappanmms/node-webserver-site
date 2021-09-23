const path = require('path')
const express = require('express')
const port = process.env.PORT || 3000
const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')
console.log(publicDirectoryPath)

app.use(express.static(publicDirectoryPath))
app.get('', (req,res) => {
    res.send('Hello Express!')
})



app.listen(port, () => {
    console.log('server is up on port ' + port)
})