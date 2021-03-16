const express = require('express')
const routes = require('./routes/routes')
const mysql = require('mysql')
const myconn = require('express-myconnection')

const app = express()

app.use(myconn(mysql, {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Roi419021?',
    database: 'images'
}))

app.use(routes)

app.listen(9000, () => {
    console.log("server running on port 9000")
})