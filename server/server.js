const express = require('express')
const app = express()

app.post('/comment', (req, res) => {
    res.send('Viss ir uwu')
})

app.listen(5500)