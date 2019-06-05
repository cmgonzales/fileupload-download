import React,{Component} from 'react'
import {API_URL} from './config'
import Button from './Button'
import {NavLink} from 'react-router-dom'
import image from './image'
import './styles/imageUpload.css'



class imageUpload extends Component{

state = {
images: [],
  
}

onChange = e => {

  const files = Array.from(e.target.files)

const fs = new FormData()

files.forEach((file, i) => {
  fs.append(i, file)
})

  fetch(`${API_URL}/imageupload`, {
    method: 'POST',
    body: fs
    
  })

  .then(res => res.json())
  .then(images => {
    this.setState({ 
      images
    })
  })
}



render(){

return(
  <div>
  <Button onChange = {this.onChange} onClick />
  <button>
  <NavLink className = "button" to="/image" Component = {image}>Image</NavLink>
  </button>
  </div>
)
}
}
export default imageUpload;