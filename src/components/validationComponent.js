import React from 'react'


const Validatelength = (props) =>{
        const charLength =props.charLength;
        if(charLength !== 0 && charLength < 5){
            return (
                <div style = {{color:'red'}}>
                <p>Text too short!!!</p>
              </div>  
            );
        }else if (charLength !== 0 && charLength > 10){
            return(
                <div style = {{color:'red'}}>
                <p>Text long enough!!!</p>
              </div>  
            );
        }else{
            return null;  
        }  
}

export default Validatelength;