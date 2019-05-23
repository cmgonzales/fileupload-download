import React,{Component} from 'react'
import {API_URL} from './config'
import Button from './Button'
import {NavLink} from 'react-router-dom'


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

nextPage = e => {
    console.log("next page")
}



render(){

return(
  <div>
  <div className = "buttons">
  <Button onChange = {this.onChange} onClick />
  <NavLink to="/image">Image</NavLink>
  </div>
</div>
)

}
}
export default imageUpload;