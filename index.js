const express = require('express')
const randomString = require('randomstring')
const mongoDB = require('./config/mongoose')
const Link = require('./model/link')
const PORT= 8000
const app = express()
app.use(express.json())

// const map = new Map()

app.post( '/shorten', async (req, res) => {

    const originalUrl = req.body.url
    const code = randomString.generate(8)
    // map.set(code, originalUrl)

    const link = await Link.create({ originalURL: originalUrl, 
        shortenedURL: `http://localhost:8000/${code}`,
        visited: 0, 
        code: code
    })


    return res.status(200).json({ shortenLink: link.shortenedURL })


} )

app.get('/:id', async (req, res) => {

    const ID = req.params.id
    console.log(ID)
    // return res.status(200).json({
    //     originalUrl: map.get(ID)
    // })

    // return res.redirect(map.get(ID))

    const link = await Link.findOne({ code: ID })
    link.visited++
    link.save()

    return res.redirect(link.originalURL)

})


mongoDB.then(() => {

    app.listen(PORT, () => {
        console.log("Server is running!")
    })

})
