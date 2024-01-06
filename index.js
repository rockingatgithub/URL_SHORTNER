const express = require('express')
const randomString = require('randomstring')
const PORT= 8000
const app = express()
app.use(express.json())

const map = new Map()

app.post( '/shorten', (req, res) => {

    const originalUrl = req.body.url
    const code = randomString.generate(8)
    map.set(code, originalUrl)

    return res.status(200).json({ shortenLink: `http://localhost:8000/${code}` })


} )

app.get('/:id', (req, res) => {

    const ID = req.params.id
    console.log(ID)
    // return res.status(200).json({
    //     originalUrl: map.get(ID)
    // })

    return res.redirect(map.get(ID))

})


app.listen(PORT, () => {
    console.log("Server is running!")
})