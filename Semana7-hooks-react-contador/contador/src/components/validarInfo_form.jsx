import { useEffect, useState } from "react";

export function ValidarForm(){
    const [formData, setFormdata] = useState({
        nome: '',
        email: '',
        idade: ''
    })
    const [message, setMessage] = useState(null)

    function enviar(e){
        e.preventDefault()
        console.log('enviado', formData)
    }

    useEffect(() => {

        const isError = Object.values(formData).reduce((totalizador, item) => {
            if(!item)  totalizador += 1
            
            return totalizador
        }, 0)

        if(isError > 0){
            setMessage('Preencha todos os campos')
        }else{
            setMessage(null)
        }
    }, [formData])

    return(
        <div className="container mt-4">
            <form onSubmit={enviar} className="mb-4" >
                Nome
                <input 
                    placeholder="Informe seu nome" 
                    type="text" 
                    className="form-control mb-4" 
                    onChange={(event) => setFormdata(prevState => ({ ...prevState, nome: event.target.value }))} />
                E-mail
                <input 
                    placeholder="Informe seu e-mail" 
                    type="text" 
                    className="form-control mb-4" 
                    onChange={(event) => setFormdata(prevState => ({ ...prevState, email: event.target.value }))} />
                
                Idade
                <input 
                    placeholder="Informe sua idade" 
                    type="text" 
                    className="form-control mb-4" 
                    onChange={(event) => setFormdata(prevState => ({ ...prevState, idade: event.target.value }))} />

                    <button type="submit" className="btn btn-primary mt-4">Cadastrar</button>
            </form>

            <code>
                {message}
            </code>

        </div>
    )
}

