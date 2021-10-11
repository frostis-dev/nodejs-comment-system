const express = require('express')
const app = express()
const sqlite3 = require('sqlite3').verbose()
//const db = sqlite3.Database('./database/coomments.sqlite')
/*
db.serialize( () => {
    //db.run("CREATE TABLE IF NOT EXISTS comments (id int NOT NULL AUTO_INCREMENT, name varchar(35) NOT NULL, comment LONGTEXT NOT NULL);")
})
*/

app.post('/comment', (req, res) => {
    console.log(req.params)
    res.redirect('http://127.0.0.1:5500/client')

})

app.listen(5500)