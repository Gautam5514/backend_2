require('dotenv').config();
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/facebook', (req, res) => {
    res.send("Hey Man this is the man, The Myth, The Gautam");
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})