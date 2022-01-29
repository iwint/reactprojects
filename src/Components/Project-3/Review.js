import React, { useState } from 'react'
import data from './data/reviewdata'
import {ImQuotesRight} from "react-icons/im"
import {MdOutlineArrowForwardIos, MdOutlineArrowBackIosNew} from 'react-icons/md'



function Review() {
    
    const [index,setIndex] = useState(0)
    const {name,image,job,info} = data[index]
   
 const checkIndex= (number)=>{
     if(number > data.length - 1){
         return 0;
     }
     if (number < 0){
         return data.length-1
     }
     return number;
 }   

const randomIndex = () =>{
    
    let randomNumber =  Math.floor(Math.random() * data.length);
    if(randomNumber === index){
        randomNumber = index + 1;
    }
    setIndex(checkIndex(randomNumber))
   
        
    
}

  const NextReview = () =>{
      setIndex((index)=>{
           let NewIndex = index + 1;
           return checkIndex(NewIndex);
      })
  }
  const PreReview = () =>{
    setIndex((index)=>{
         let NewIndex = index - 1;
         return  checkIndex(NewIndex);
    })
}


    return (
        <main>
            <div className="img-container">
            <div className="icon">
                  <ImQuotesRight className='Icon'/>
                </div>
            <div className="image">
              
                <img src={image} alt={name} />
            </div>
            </div>
              
            <div className="content">
                    <h3>{name}</h3>
                    <h2>{job}</h2>
                    <p>{info}</p>
            </div>
            <div className="button">
                  
                   <MdOutlineArrowBackIosNew onClick={PreReview} className='prev'/>
                   <MdOutlineArrowForwardIos onClick={NextReview} className='nxt'/>
            </div>
            <div className="randomBtn">
                <button className='btn-random' onClick={randomIndex}>Suprise Me</button>
            </div>
            
        </main>
    )
}

export default Review
