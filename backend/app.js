require('dotenv').config()
const express = require('express')
const cloudinary = require('cloudinary').v2;
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

app.get('/', (req, res) => {

  res.send('page')
})

app.post('/imageupload', (req, res) => {

  const values = Object.values(req.files)
  
  values.map(image => 
    cloudinary.uploader.upload(image.path, 
    { use_filename: true,
    unique_filename: false ,
    public_id: image.name,
    tags: 'profile',
    },
    function(error, result) {console.log(result, error)}

  ))

})


app.listen(process.env.PORT || 8000, () => console.log('listening'))