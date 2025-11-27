/*
These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
GitHub Profile: https://github.com/AshrafMorningstar
*/

import { useState, useEffect } from 'react'

import ControlBox from './ControlBox.js'

function App(){
    const [shadows, setShadows] = useState([])
    // const controls = [
    //     {
    //         index: 0
    //     }
    // ]
    const [controls, setControls] = useState([
        {
            index: 0
        }
    ])

    const updateShaodw = (s, id) => {
        // setShadow(`${s.x}px ${s.y}px ${s.blur}px ${s.spread}px ${s.color}`)
        // console.log(shadow);
        const t = [...shadows]
        t[id] = s.inset ? `inset ${s.x}px ${s.y}px ${s.blur}px ${s.spread}px ${s.color}` : `${s.x}px ${s.y}px ${s.blur}px ${s.spread}px ${s.color}`
        setShadows(t)
    }

    // useEffect(() => {
    //     setShadow(shadows.join(","))
    // }, [shadows])

    function addShadow(){
        setControls([...controls, {
            index: controls.length
        }])
    }

    return (
        <div className="container">
            <div className="preview">
                <div className="preview-box" style={{boxShadow: shadows.join(",")}}></div>
            </div>
            <div className="controls">
                {controls.map(c => <ControlBox key={c.index} id={c.index} updateShaodw={updateShaodw}/>)}
                <p className="text-right">
                    <button onClick={addShadow}>Add Layer</button>
                </p>
                <div className="codes controls-box">
                    <span className="prop-name">box-shadow: </span>
                    <span className="code">{shadows.join(", ")};</span>
                </div>
            </div>
        </div>
    )
}

export default App