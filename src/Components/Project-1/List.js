import React from 'react'

import styled from 'styled-components';

const Card = styled.div`
display:flex;
align-items:center;
margin-bottom:15px;
.pic{
img{
    width:100px;
    height:100px;
    border-radius:50%;
}

}
.Card-content{
    margin-left:10px;
    display:flex;
    flex-direction:column;
    
    justify-content:space-between;
}
`;    


function List({Data}) {
    return (

        Data.map(Person=>{
            const{id,name,age,img}=Person;
            return(
            <Card key={id}>
            <div className='pic'>
                <img src={img} alt={name}/>
            </div>
            <div className='Card-content'>
               <h2>{name}</h2>
               <p>{age} Years</p>
            </div>
         
        </Card>
            )
        })
        
    )
}

export default List
