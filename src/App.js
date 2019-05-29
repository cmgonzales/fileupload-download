import React,{Component} from 'react'
import Upload from './components/imageUpload'
import './App.css'
import {SectionsContainer, Section} from 'react-fullpage';
//test


class App extends Component{


render(){
  return(
    <SectionsContainer>
    <Section className = "img">
 
    <Upload/>
    
    </Section>
    </SectionsContainer>
  )
}


}

export default App;