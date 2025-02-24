// import Image from "next/image";
"use client";
import styled from "styled-components";

export default function Home() {

  

  return (
   <Wrapper>
    <MainSection>
      <div className="Background">
        <div className="imgSection">
        
        </div>
        <span className="circle">
        </span>
      </div>
      <div className="content">

      </div>
    </MainSection>
   </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: fixed;
  z-index:-99;
  display: flex;
  overflow-x: hidden;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const MainSection = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: fixed;
  z-index:-99;
  display: flex;
  overflow-x: hidden;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  .Background{
    .imgSection{
      
    }
    .circle{
      position: absolute;
      width: 700px;
      height: 800px;
      background-color: rgba(${()=>  Math.random() * 255},${()=>  Math.random() * 255},${()=>  Math.random() * 255},${()=>  Math.random() * 0.4});
      border-radius: 50%;
      box-shadow: 2px 2px 5px rgba(${()=>  Math.random() * 255},${()=>  Math.random() * 255},${()=>  Math.random() * 255},${()=>  Math.random() * 0.4});
      right:-20%;
      transform:rotate(45deg);
      top:0;
      z-index:-999;
    @media (max-width:780px){
     right:-50%;
    }
     @media (max-width:660px){
     right:-90%;
    }
    }
    
  }
`;