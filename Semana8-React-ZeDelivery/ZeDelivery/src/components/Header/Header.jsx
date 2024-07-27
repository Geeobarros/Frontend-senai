import { Link } from 'react-router-dom'
import styles from './header.module.css'

export default function Header(){
    return(
        <div className={styles.header}>
            {/* <div className={styles.container}> */}
                <img alt="Zé delivery logo"  src="https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-web.imgix.net%2Fstatic%2Fimg%2Fwhite-logo.png%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D121%26h%3D40%26dpr%3D2%26fm%3Dpng&w=128&q=75"  ></img>
                <button className={styles.btn} >
                   <Link style={{ textDecoration: 'none',color: "black" }} to='/signin'  >Entrar</Link> 
                </button>
            {/* </div> */}
        </div>
        
    )
}