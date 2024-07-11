import { useState } from "react"
import styles from './FormContato.module.css'
import RedesSociais from '../redesSociais'

function FormContato() {

    const [nome, setNome] = useState('')
    const [telefone, setTelefone] = useState('')
    const [email, setEmail] = useState('')
    const [mensagem, setMensagem] = useState('')

    function handleSubmit(){
        const form = {
            nome: nome,
            telefone: telefone,
            email: email, 
            mensagem: mensagem
        }
        console.log('dados', form)
    }

    return(
        <>
        <div className={styles.agrupaForm}>

            <section className={styles.lojaOnline}>

                <h2>Loja Online</h2>
                <div className={styles.endereco}>

                    <ul >
                        <li>
                            <p>Rua Ali Perto, 35</p>
                            <p>Rio de Janeiro - RJ</p>
                            <p>Brasil - Terra - Via Láctea</p>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <p>contato@bikecraft.com</p>
                            <p>assistencia@bikcraft.com</p>
                        </li>

                        <p>+55 21 9999-9999</p>
                    </ul>

                    <RedesSociais/>
                </div>
            </section>

            <section className={styles.contatoSection}>

                <form  className={styles.contatoForm}>
                    
                    <div>
                    <label>Nome</label>
                    <input placeholder="Seu nome" id="nome" value={nome} onChange={(e) => setNome(e.target.value)}/>
                    </div>
                    
                    <div>
                    <label>Telefone</label>
                    <input placeholder="(21)9999-9999" id="telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)}/>
                    </div>
                    
                    <div className={styles.col2}>
                    <label>E-mail</label>
                    <input placeholder="contato@email.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>

                    <div className={styles.col2}>
                        <label>Mensagem</label>
                    <textarea placeholder="O que você precisa?" value={mensagem} onChange={(e) => setMensagem(e.target.value)}></textarea>
                    </div>

                    <button onClick={() => handleSubmit()}>ENVIAR MENSAGEM</button>
                </form>
            </section>
        </div>

        </>
    )
}

export default FormContato