import Head from 'next/head'
import styled from 'styled-components';
import Header from '../comps/Header';
import Line from '../comps/Line';


const HomeCont = styled.div`
  display: flex;
  flex-direction: column;
  height: 812px;
  justify-content: center;
  align-items: center;
  background-color: #FFF8F8;

    .navbar {
      width: 100%;
      height: 40px;
      background-color: #9FCDA4;
    }

    .saved_col {
      display:flex;
      width: 100%;
      height:70%;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;

      .saved_row {
        display:flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin-top: 5px;
      }

      .item {
        display:flex;
        flex-wrap: wrap;
        margin: 12px;
      }

      img {
        width: 100px;
        height: 100px;
        object-fit: contain;
      }
    }

    
`;


export default function Home() {
  return <HomeCont>
    <div className="navbar"></div>
    <Header icon="/plate.png" text="Saved Recipes"/>
    <Line LineBgColor="#000" LineWidth="35%" LineHeight="5px"/>
    <div className="saved_col">
      <div className="saved_row">
          <img className="item" src="/DN-Onion.jpg" />
          <img className="item" src="/DR-Mushroom.jpg" />
          <img className="item" src="/SB-Eggplant.jpg" />
      </div>
      <div className="saved_row">
          <img className="item" src="/SR-Pepper.jpg" />
          <img className="item" src="/DN-Eggplant.jpg"/>
          <img className="item" src="/DR-Pepper.jpg" />
      </div>
      <div className="saved_row">
          <img className="item" src="/DR-Eggplant.jpg" />
          <img className="item" src="/SB-Onion.jpg" />
          <img className="item" src="/SR-Mushroom.jpg" />
      </div>
    </div>
  </HomeCont>
}