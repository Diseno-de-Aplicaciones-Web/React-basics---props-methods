import { useState } from "react"

function PasaPalabro(props) {

    const [ nuevoPalabro, setNuevoPalabro ] = useState("");

    function inputChangeHandler (event) {
        setNuevoPalabro(event.target.value)
        props.parentSetter(event.target.value)
    }

    return (
        <>
            <input type="text" onChange={inputChangeHandler} value={nuevoPalabro}/>
            <p>Nuevo palabro: {nuevoPalabro}</p>
        </>
    )
}

export default PasaPalabro