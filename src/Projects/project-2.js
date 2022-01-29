import {React,useEffect,useState} from 'react';
import './project2.css';
import Data from '../Components/Project-2/data/project2data';
import Card from '../Components/Project-2/Card';


const PreLoader =() =>{
  return (
   <div className="Container">
     <h1>Loading....</h1>
   </div>
    
  )
}




function Project2() {


    const [load,setLoad] = useState(true);
    const [data,setdata]= useState(Data);
  
const Refresh= ()=>{
  window.location.reload();
}
  const removeData=(id)=>{
      const newData = data.filter((data)=>data.id !== id)
      setdata(newData);
  }

 
    const Tours = () =>{

      
     setLoad(true)
      setTimeout(()=>{
        setLoad(false);
      },2000);
      
      
    
    }
    

    useEffect(()=>{
      Tours();
    },[]);

    if(load){
      return(
          
          < PreLoader  />
          
      )
    }
  


if( data.length === 0){
  return (
    <div className="Container">
      <div className="title">
       <h1>No Tours Left</h1>
         <br/>
       
      </div>
      <button class='btn'  onClick={Refresh}>Refresh</button>
    </div>
  )
} 
return(
  <div className="Container">
    <h1>Our Tours</h1>
    <div className="box"></div>
      <Card tours={data} removeData={removeData}/> 
  </div>
)
 
  
}











    


export default Project2;
