import React from 'react'
import Image from "next/image";

const ImageGrid = ({src,width,height,alt}:any) => {



  return (

<>

      
          <Image
         src={src}
         width={width}
         height={height}
         alt={alt}
            className=" rounded-lg border-2  h-64 object-cover object-center" />
         
 
  
</>

)
}

export default ImageGrid