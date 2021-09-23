import React from 'react'
import './Box.css'
function Box(props) {
    const handleClick = () => {
        console.log(props.corX, props.corY);
        props.changeCorColor(props.corX, props.corY);
    }
    const colorChange = () => {
        if (props.clr === 0) {
            return "d1d1d1";
        }
        else if (props.clr === 1) {
            return "black";
        }
        else {
            return "red";
        }
    }
    return (
        <>
            <button onClick={handleClick}><div className='box' style={{ backgroundColor: `${colorChange()}` }}></div></button>
        </>
    )
}

export default Box
