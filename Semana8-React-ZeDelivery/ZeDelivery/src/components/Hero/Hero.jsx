import styles from './hero.module.css'

export default function Hero(){
    return (
        <>
        <div className={styles.herobg}>
            <div className={styles.title}>
                <h1>Bebida rápida, gelada e no precinho?</h1>
                <h1>O Zé entrega tudo.</h1>
                <div>
                    <input className={styles.input}  type="text" placeholder='Inserir endereço para ver preço' />
                </div>
            </div>
        </div>
        </>
    )
}