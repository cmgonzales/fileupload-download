import React, {useState, useEffect} from 'react'


const image = () => {
    const [img , setimg] = useState([])
    const [version, setversion] = useState([])



    async function fetchMyAPI() {
      let response = await fetch('https://res.cloudinary.com/dcjsivxjw/image/list/profile.json')
      let data = await response.json()

      setimg(data.resources)
  
    }

    useEffect(() => {
      fetchMyAPI();
    }, []);

  img.map(ver => {
      return  setversion(ver.version)
    })
console.log(version)

    const public_id = img.map(id => {
      return id.public_id
    })

console.log(public_id)

         let imgone = "https://res.cloudinary.com/dcjsivxjw/image/upload/v1557799234/Mickey-Mouse-2.jpg.jpg"
  let images = "https://res.cloudinary.com/dcjsivxjw/image/upload/v" + version + "/" + public_id + ".jpg"

  console.log(images)


         return (
           <div>
            <ul>
             {img.map(item => 
             <li>
            
               alt = "Images"  />
               </li>
             )}
           </ul> 
      
          <h1>test</h1>
    
          </div>
        );
         
      }


export default image;