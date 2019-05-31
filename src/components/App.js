import React,{Component} from 'react'
import Upload from './imageUpload'
import './App.css'
import {SectionsContainer, Section} from 'react-fullpage';



class App extends Component{


render(){
  return(
    <SectionsContainer>
    <Section className = "img">
    <div className = "center_input">
    <Upload/>
    </div>
    </Section>
    </SectionsContainer>
  )
}


}

export default App;