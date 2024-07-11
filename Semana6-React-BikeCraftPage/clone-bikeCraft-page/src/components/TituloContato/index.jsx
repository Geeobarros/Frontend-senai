import styles from './TituloContato.module.css'

function TituloContato() {
    return(
        <> <div className={styles.bgTitulo}>
            <div className={styles.titulo}>
            <p>Resposta em até 24H</p>
            <h1>nosso contato<span>.</span></h1>
            </div>
        </div>
        </>
    )
}

export default TituloContato