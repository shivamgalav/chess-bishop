import './Board.css'
import React,{useState} from 'react'
import Box from './Box';
let ATwoD =[[0,1,0,1,0,1,0,1],
            [1,0,1,0,1,0,1,0],
            [0,1,0,1,0,1,0,1],
            [1,0,1,0,1,0,1,0],
            [0,1,0,1,0,1,0,1],
            [1,0,1,0,1,0,1,0],
            [0,1,0,1,0,1,0,1],
            [1,0,1,0,1,0,1,0]];
let key = 0;

function useForceUpdate(){
    // eslint-disable-next-line
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update the state to force render
}


function Board() {
    const forceUpdate = useForceUpdate();
    let[corX,corY]=[0,0];

    

    const updateCor = ()=>{
        corY = 0;
        corX++;
    }
    const changeCorColor=(corx,cory)=>{
        let tx = corx;
        let ty = cory;
        ATwoD =[[0,1,0,1,0,1,0,1],
            [1,0,1,0,1,0,1,0],
            [0,1,0,1,0,1,0,1],
            [1,0,1,0,1,0,1,0],
            [0,1,0,1,0,1,0,1],
            [1,0,1,0,1,0,1,0],
            [0,1,0,1,0,1,0,1],
            [1,0,1,0,1,0,1,0]];
        while(ty>=0 && tx>=0){
            ATwoD[tx][ty]=-1;
            ty--;
            tx--;
        }
        tx = corx;
        ty = cory;
        while(ty<8 && tx<8){
            ATwoD[tx][ty]=-1;
            ty++;
            tx++;
        }
        tx = corx;
        ty = cory;
        while(ty<8 && tx>=0){
            ATwoD[tx][ty]=-1;
            ty++;
            tx--;
        }
        tx = corx;
        ty = cory;
        while(ty>=0 && tx<8){
            ATwoD[tx][ty]=-1;
            ty--;
            tx++;
        }
        forceUpdate();
    }
    return (
        <>
        <div className='center'>
      
            {ATwoD.map((rw)=>{
                return(
                    <div key={key++} className='board'>
                    {
                    rw.map((cl)=>{
                    return (<Box key={key++} clr = {cl} corX ={corX} corY={corY++} matrix={ATwoD} changeCorColor={changeCorColor}/>)
                    })
                    }
                    {updateCor()}
                    </div>
                )
                })}
        </div>
       
        </>
    )
}

export default Board
