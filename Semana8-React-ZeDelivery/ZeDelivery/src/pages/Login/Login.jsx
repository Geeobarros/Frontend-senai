import { useState } from 'react'
import styles from './login.module.css'
import { useNavigate } from 'react-router-dom'



export default function Login(){
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = {
            email,
            senha
        }
        console.log(form)

        if(email === 'admin@admin.com' && senha === 'admin123'){
            navigate('/home')
        }else {
            alert('E-mail e/ou senha incorretos')
        }

    }

    return(
        <>
        <div className={styles.login}>
            <img className={styles.imagem} src="https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-web.imgix.net%2Fstatic%2Fimg%2Flogo.png%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3Dundefined%26h%3Dundefined%26dpr%3D2%26fm%3Dpng&w=256&q=75" alt="Logotipo Zé Delivery" />

            <form onSubmit={handleSubmit} className={styles.dados}>
                <input type="text" placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)}/>
                 <input type='text' placeholder='Senha' value={senha} onChange={(e) => setSenha(e.target.value)} />

                <button className={styles.btn} type='submit'>Entrar</button>

            </form>
        </div>
        </>
    )
}