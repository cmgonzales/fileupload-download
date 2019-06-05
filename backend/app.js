require('dotenv').config()
const express = require('express')
const cloudinary = require('cloudinary')
const formData = require('express-form-data')
const cors = require('cors')
const { CLIENT_ORIGIN } = require('./config')


const app = express();

cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.API_KEY, 
  api_secret: process.env.API_SECRET
})
  
app.use(cors({ 
  origin: CLIENT_ORIGIN 
})) 

app.use(formData.parse())

app.get('/image', (req, res) => res.send("test"))


app.post('/imageupload', (req, res) => {

    const values = Object.values(req.files)
  
    console.log(values)
  
   
    values.map(image => 
      cloudinary.uploader.upload(image.path, 
      { use_filename: true,
      unique_filename:false, 
      public_id: image.name,
      tags: 'profile',
      },
      function(error, result) {console.log(result, error)}
      
      )
    )
});

app.listen(process.env.PORT || 8000, () => console.log('listening'))