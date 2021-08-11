import React, { useState } from 'react';



const ColorPicker = () => {
    const[color, setColor] = useState('');

    function picker() {
        alert(`Este es el valor de ${color}`);
    }

    // const Style = {
    //     margin: 'auto',
    // border: '1px solid red'
    //   };

    return (
        <>
            <div style = {{backgroundColor: `${color}`, width: '100%', height: '40rem'}}>
            <div style = {{display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20rem'}}>
            <input type="color" onChange={(e) => setColor(e.target.value)} />
            <button onClick={picker}>Change Color</button>
            </div>
            </div>
        </>
    )
}

export default ColorPicker;
