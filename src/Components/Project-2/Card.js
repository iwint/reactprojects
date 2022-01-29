import React, { useState } from 'react'

function Card({tours , removeData }) {
    const [readMore, setreadMore] = useState(false);
  
    
    return (
        tours.map(tour=>{
            
            const{id,title,price,image,info}=tour;
            
            return(
                
                
                <div className="card">
                    
                   
                    <div className="image">
                        <img src={image} alt="" />
                    </div>
                    <div className="content">
                        <h2>{title}</h2>
                        <h3>${price}</h3>


                    </div>
                    <div className="discription">
                        <p>{readMore ? info : `${info.slice(0 , 200)}.....`}
                          <short/> <button className='pbtn' onClick={()=>{setreadMore(!readMore)}}>{readMore ? ' showless' : 'readmore'}</button>
                        </p>
                    </div>
                    <div className="button">
                        <button className='btn'onClick={()=>{removeData(id)}} >Not Interested</button>
                    </div>
                </div>
              
            )
        })
    )
}

export default Card
