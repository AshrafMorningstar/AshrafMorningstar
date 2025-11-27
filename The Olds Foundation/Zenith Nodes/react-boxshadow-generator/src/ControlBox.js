/*
These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
GitHub Profile: https://github.com/AshrafMorningstar
*/

import { useState, useEffect } from 'react'


function ControlBox({updateShaodw, id}){

    const [shadowModel, setShadowModel] = useState({
        x: 0,
        y: 0,
        blur: 0,
        spread: 0,
        color: '#000',
        inset: false
    })

    const updateShaowModel = (propr, val) => {
        setShadowModel({
            ...shadowModel,
            [propr]: val
        })
    }

    useEffect(() => {
        updateShaodw(shadowModel, id)
    }, [shadowModel])

    return (
        <div className="controls-box">
            <label>Offset X</label>
            <input type="range" min="-100" max="100" defaultValue="0" onChange={(e) => updateShaowModel("x", e.target.value)} />
            <label>Offset Y</label>
            <input type="range" min="-100" max="100" defaultValue="0" onChange={(e) => updateShaowModel("y", e.target.value)} />
            <label>Blur</label>
            <input type="range" min="0" max="100" defaultValue="0" onChange={(e) => updateShaowModel("blur", e.target.value)} />
            <label>Spread</label>
            <input type="range" min="0" max="100" defaultValue="0" onChange={(e) => updateShaowModel("spread", e.target.value)} />
            <label>Color</label>
            <input type="color" onChange={(e) => updateShaowModel("color", e.target.value)} />
            <p>
                <span style={{marginRight: ".5em"}}>Inset:</span>
                <input type="checkbox" onChange={(e) => updateShaowModel("inset", !shadowModel.inset)} />
            </p>
        </div>
    )
}

export default ControlBox