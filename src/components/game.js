import React,{useState} from "react";
import Functionality from "../components/funtionality";

// styled components
import { Container } from "./styled-components/container.styled";
import { Wrapper } from "./styled-components/wrapper.styled";
import { Row1 } from "./styled-components/Row1.styled";
import { Row2 } from "./styled-components/Row2.styled";
import { Row3 } from "./styled-components/Row3.styled";
import {Column1} from "./styled-components/column1.styled";
import {Column2} from "./styled-components/column2.styled";
import {Column3} from "./styled-components/column3.styled";

function Game() {
    const[block, setBlock]= useState(Array(9).fill(null));
    const[X,setX]=useState(true);
    const calwinner = Winner(block);
    let status;
    if (calwinner) {
        status = 'Winner: ' + calwinner;
        alert("winner is "+ calwinner)
    } else {
        status = 'Player Turn: ' + (X ? 'X' : 'O');
    }
    
    const renderFuntionality =(i)=>{
        return(
            < Functionality value={block[i]} onClick={()=>handleClick(i)}/>
        )
    }
    const handleClick=(i)=>{
        const blocks = block.slice();
        if (blocks[i]=== null){
        blocks[i]=X?'X':'O';
        setBlock(blocks); 
        setX(!X);
    }
    else {
        
    }
        console.log(i);

    }
    function Winner(blocks){
        const winningarr = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ];
        for(let i =0; i<winningarr.length; i++)
        {
            const[a,b,c]=winningarr[i];
            if (blocks[a] && blocks[a]===blocks[b] && blocks[a]===blocks[c]){
                return blocks[a];
            }
        }
        return null;
    }
  return (
    <>
      <Container>
        <Wrapper>
          <Row1>
            <Column1>
             {renderFuntionality(0)}
            </Column1>
            <Column2>
              {renderFuntionality(1)}
            </Column2>
            <Column3>
              {renderFuntionality(2)}
            </Column3>
          </Row1>
          <Row2>
          <Column1>
          {renderFuntionality(3)}
            </Column1>
            <Column2>
            {renderFuntionality(4)}
            </Column2>
            <Column3>
            {renderFuntionality(5)}
            </Column3>
          </Row2>
          <Row3>
          <Column1>
          {renderFuntionality(6)}
            </Column1>
            <Column2>
            {renderFuntionality(7)}
            </Column2>
            <Column3>
            {renderFuntionality(8)}
            </Column3>
          </Row3>
          <h3>{status}</h3>
          {/* <button onClick={refresh}>PlayAgain</button> */}
        </Wrapper>
      </Container>
    </>
  );
}
export default Game;
