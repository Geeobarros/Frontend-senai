import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import ProductPage from "../pages/Products/Products";
import Modal from "../components/Modal/Modal";


export default function RoutesComponent(){
    return(
        <>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/home" element={<Home/>}/>
                <Route path="/signin" element={<Login/>}/>
                <Route path="/produtos" element={<ProductPage/>}/>
                {/* <Route path="/modal" Component={Modal}/> */}

            </Routes>
        </>
    )
}