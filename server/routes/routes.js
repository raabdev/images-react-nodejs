const express = require('express')
const { diskStorage } = require('multer')
const multer = require('multer')
const path = require('path')

const router = express.Router()

const diskstorage = multer.diskStorage({
    destination: path.join(__dirname, '../images'),
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname)
    }
})

const fileUpload = multer({
    storage: diskstorage
}).single('image')

router.get('/', (req, res) => {
    res.send("welcome to the page")
})

router.post('/images/post', fileUpload, (req, res) => {
    console.log(req.file)
    res.send('image saved')
})

module.exports = router