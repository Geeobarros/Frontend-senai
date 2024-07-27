import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import MainModal from "../../components/Modal/Modal";
import Products from "../../components/Products/products";
import styles from './home.module.css';
import { useEffect, useState } from "react";

export default function Home(){
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        setOpen(true)
    }, [])

    return(
        <div className={styles.container}>
            <Header/>
            <Hero/>
            <Products/>

            <MainModal open={open} handleClose={handleClose} />

        </div>
    )
}