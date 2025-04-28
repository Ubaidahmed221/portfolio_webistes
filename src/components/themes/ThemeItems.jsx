import React from 'react'

function ThemeItems({hue, img, changeColor}) {
    return <img src={img} alt="" className="theme-img"
    onClick={() =>{
        changeColor(hue)
    }}
    />;
}

export default ThemeItems
