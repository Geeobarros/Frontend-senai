import { useState } from 'react'
import styles from './login.module.css'
import { Button } from '@mui/material'



export default function Login(){
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = {
            email,
            senha
        }
        console.log(form)
    }

    return(
        <>
        <div className={styles.login}>
            <img className={styles.imagem} src="https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-web.imgix.net%2Fstatic%2Fimg%2Flogo.png%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3Dundefined%26h%3Dundefined%26dpr%3D2%26fm%3Dpng&w=256&q=75" alt="Logotipo Zé Delivery" />

            <form onSubmit={handleSubmit} className={styles.dados}>
                <input type="text" placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)}/>
                 <input type='text' placeholder='Senha' value={senha} onChange={(e) => setSenha(e.target.value)} />

                <Button size='large' color='' variant='contained'  type='submit'>Entrar</Button>

            </form>
        </div>
        </>
    )
}