import  { useState} from 'react' 
import { baseProduct } from '../environments'
import axios from 'axios' 


function  GetProduct  (id)  { 

   const [product, ser] = useState({})

    axios.get(`${baseProduct}/${id} `)
      .then((response) => {
        ser(response.data) 
        console.log(product)
     console.log(response.data)
      })
      .catch((error) => {
        console.error(error.messege)
      }) 
     
}  



export {GetProduct}