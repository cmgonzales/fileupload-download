require('dotenv').config()
const express = require('express')
const cloudinary = require('cloudinary')
const formData = require('express-form-data')
const cors = require('cors')


const app = express()

//need to create config 

cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.API_KEY, 
  api_secret: process.env.API_SECRET
})

console.log(process.env.CLOUD_NAME)


  
app.use(cors({ 
  origin: 'http://localhost:3000' 
})) 

app.use(formData.parse())

app.get('/wake-up', (req, res) => res.send("wake-up page"))

app.post('/imageupload', (req, res) => {



  const values = Object.values(req.files)
  const promises = values.map(image => cloudinary.uploader.upload(image.path))
  
  Promise
    .all(promises)
    .then(results => res.json(results))
    .catch((err) => res.status(400).json(err))
})

app.listen(process.env.PORT || 8000, () => console.log('listening'))