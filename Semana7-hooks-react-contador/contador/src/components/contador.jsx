import { useState } from "react"

export function Contador() {
    const [contador, setContador] = useState(0)

    const incrementa = () => {
        setContador(contador + 1)
    }

    const decrementa = () => {
        if (contador > 0) {
            setContador(contador -1)
        }
    }

    return(
        <>
            <h3 className=" mt-4 d-flex justify-content-center align-items-center">Contador</h3>
        <div className='mt-  d-flex justify-content-center align-items-center gap-3'>

            <button className="btn btn-danger" onClick={()=> decrementa()}>-</button>

            <span style={{fontSize: '20px'}}>{contador}</span>

            <button className="btn btn-primary" onClick={()=> incrementa()}>+</button>


        </div>
        </>

    )

  
}


