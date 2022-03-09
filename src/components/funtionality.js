import React from 'react';
import { Button } from './styled-components/Button.styled';

function Functionality(props){
    return(
        <>
        <Button onClick={()=>props.onClick()}>{props.value}</Button>
        </>
    )
}
export default Functionality;