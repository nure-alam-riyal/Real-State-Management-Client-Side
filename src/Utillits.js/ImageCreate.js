

import axios from 'axios'

export const imageURL=async(img)=>{
  
 
       
 const {data} = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_Key}`,{
        image:img
    },
    {
        headers: {
            'content-type': 'multipart/form-data'
        }})
            
           
  return  data.data.display_url
    
}