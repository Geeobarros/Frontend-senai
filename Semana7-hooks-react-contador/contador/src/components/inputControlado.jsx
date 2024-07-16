import { useState, useRef, useEffect } from "react";

export default function InputControlado(){
    const [inputEl, setInputEl] = useState('')//useState('Eu irei mudar')
    const inputFocus = useRef('null')

   const handleChange = (e) => {
        setInputEl(e.target.value)
    }

   useEffect(() =>{
        inputFocus.current.focus()
    },[])


    return(
        <>

        <div className=" container mt-4">
            <h3>Input Controlado</h3>
            <div className="d-flex gap-4">
            <input className="  mb-5" type="text" 
            placeholder="Digite aqui"
            value={inputEl}
            ref={inputFocus}
            onChange={handleChange} />

            <p>O texto digitado é: <strong>{inputEl}</strong></p>
                
            </div>
        </div>
        </>
    )
}
