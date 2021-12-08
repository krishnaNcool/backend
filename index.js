const express = require('express')
const format = require('date-format')
const app = express()
const port = process.env.port || 300

app.get("/", (req, res)=>{
    res.send("hello")
})

app.get("/api/v1/instagram", (req, res)=>{
    const instagramData={
        user:"kris",
        followers:10,
        date: format.asString("dd  MM --- hh:mm:ss", new Date())
    }
    res.status(200).json({instagramData})
})



app.get("/api/v1/facebook", (req, res)=>{
    const instagramData={
        user:"krishna",
        followers:100,
        date: new Date()
    }
    res.status(200).json({instagramData})
})

// capture URL token data in params
app.get("/api/v1/:token", (req, res)=>{
    const instagramData={
        user:"krishna",
        followers:100,
        date: new Date()
    }
    res.status(200).json({param: req.params.token})
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})