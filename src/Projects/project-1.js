import {React,useState} from 'react'
import styled from 'styled-components';
import List from '../Components/Project-1/List';
import Data from '../Components/Project-1/data/project1data';
import './project.css'


const Container = styled.div`

height:100vh;
display:flex;
align-items:center;
justify-content:center;


`;

const Box = styled.div`
width:30%;
height:auto;
background-color: #f5f5f5;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;



border-radius:2px;

@media (min-width:800px){
    height:auto;
    width:auto;
    margin-top:30px;
    margin-left:10px;
    margin-right:10px; 
}

@media(max-width:800px ){
    height:auto;
    width:auto;
    margin-top:30px;
    margin-left:10px;
    margin-right:10px;   
  
}


`;
const Content = styled.div`
 padding:20px;
 display:flex;
 flex-direction:column;
 
`;
const Title = styled.h1`
text-align:center;
margin-bottom:20px;
`;
const Button = styled.button`
width: 400px;
height: 40px;
background-color: #4b145b;
border-radius: 5px;
border: none;
font-size: 16px;
color: #ffffff ;
`;

function Project1() {
 
    const [data , setdata] = useState(Data);

    return (
        <Container>     
             <Box>
           <Content>
             <Title> {data.length} Birthdays Today </Title>
             <List Data={data}/>
            
            <Button   onClick={()=> setdata([])}> Clear All</Button>
           </Content>
            
       </Box>
       </Container> 
    )
}

export default Project1
