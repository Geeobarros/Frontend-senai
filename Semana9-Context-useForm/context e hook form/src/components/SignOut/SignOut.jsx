import { useAuth } from "../../contexts/authContext";


export default function Logout(){
    const { signOut } = useAuth();

    return(
        <>
        <button onClick={signOut}> Logout</button>
        </>
    )

}