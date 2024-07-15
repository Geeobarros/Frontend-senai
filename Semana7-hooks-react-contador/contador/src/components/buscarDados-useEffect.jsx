import { useEffect, useState } from "react";

export function BuscarDadosAPi(){

    const [texto, setTexto] = useState(null)
    
   async function api() {

       const url = await fetch("https://servicodados.ibge.gov.br/api/v3/noticias/?tipo=release")

       const response = await url.json()
       const data = response.items[1].titulo

       setTexto(data)
    } 

    useEffect(() => {
        api()
    })

    return(
        <div className="flex container mt-4">
            <h1 className="text-primary"    >Notícias:</h1>            
            <p>{texto}</p>
        </div>
    )
}