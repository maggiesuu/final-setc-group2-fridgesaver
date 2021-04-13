import React from 'react';
import styled from 'styled-components';


const IngredientCont =styled. div`
display:flex;
flex-direction:column;
align-items: center;
max-width:2000px;
position:relative;
width:${props=>props.width}px;
height:${props=>props.height}px;
`;

const BoxImg =styled.img`
display:flex;
width:100px;
flex-wrap:wrap;
opacity:0.4;
margin:5px;
`

const BoxSubText =styled.div`
display:flex;
justify-content:center;
flex-wrap:wrap;
font-size:10px;
margin:5px;`

const SubBox = styled.div`
display:flex;
justify-content:center;
background-color:"#E09E9E"
width:100px;
height:100px;
margin:5px;`



const Ingredient =({text = "7% of greenhouse gases produced globally are due to preventable food waste",
bgcolor ="#E09E9E",
width = 200,
height = 200,
subtext = "Lasts two weeks",
src = "/peppers.png"}) =>{
    return <IngredientCont bg = {bgcolor} width = {width} height = {height}>
     <BoxImg src = "/peppers.png"></BoxImg>
     <BoxSubText>{subtext}</BoxSubText>
     <SubBox></SubBox>
    
    
    </IngredientCont>
}

export default Ingredient