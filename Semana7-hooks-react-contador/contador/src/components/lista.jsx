import { useState } from "react"

export function Lista(){

    const [texto, settexto] = useState('')
    const [list, setList] = useState([])

    function handleSubmit(e){
        e.preventDefault()

        if(texto){
            setList(listaAnterior => {
                return [...listaAnterior, texto]
            })
        }
    }
        console.log(texto)

    return(
        <div className="container mt-4">
            <form onSubmit={handleSubmit} className="mb-4">
                <input type="text" className="form-control" onChange={e => settexto(e.target.value)} />
                <button className="btn btn-primary mt-4">Cadastrar</button>
            </form>

            <p>
            <strong>Lista:</strong>
            </p> 
            <ul>
                {
                    list.map((item, index) => (

                        <li key={index}>{item}</li>
                    ))
                }

            </ul>
        </div>
    )
}