import Head from 'next/head'
import styled from 'styled-components';
import Header from '../comps/Header';
import Line from '../comps/Line';
import Ingredient from '../comps/Ingredient'
import {useRouter} from "next/router"
import Footer from '../comps/Footer';

  const HomeCont = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  overflow:scroll;
  margin:0px;
  background-color :#FFF8F8;  

  .navbar{
      width:100%;
      height:40px;
      background-color:#9FCDA4;
  }
  `


export default function Home() {
  const router = useRouter();
  return <HomeCont>
    <div className ="navbar"></div>  
        <Header 
        icon="/salad.png"
        text="Choose one of the vegetables below that is about to expire"
        />

      <Ingredient veg = "Peppers" onClick={() => router.push('./recipeoption/Peppers')}/>
      <Ingredient veg = "Onions"  subtext ="Excellent sources of vitamins A and C, potassium, folic acid, and fiber" src = "/onion.png" onClick={() => router.push('./recipeoption/Onions')}/>
      <Ingredient veg = "Eggplants" src = "/eggplant.png" preserve = "Lasts five days" subtext = "Rich in the B vitamins: riboflavin, niacin, and pantothenic acid." onClick={() => router.push('./recipeoption/Eggplants')}/> 
      <Ingredient veg = "Mushrooms" src = "/mushroom.png"subtext = "Contains low in calories and sodium, and is a great source of dietary fiber." onClick={() => router.push('./recipeoption/Mushrooms')}/>
    

      <Footer/>
  </HomeCont>
}
