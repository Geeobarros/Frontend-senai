// import './App.css'
import { Contador } from './components/contador' //exercicio 1  FEITO
import { BuscarDadosAPi } from './components/buscarDados-useEffect' //exercicio 2 FEITO
import { Lista } from './components/lista' //exercicio 3 FEITO
import { ValidarForm } from './components/validarInfo_form' //exercicio 4 FEITO
import InputControlado from './components/inputControlado' //exercicio 5 FEITO


function App() {

 return (
  <>
    
    <Contador/>

    <BuscarDadosAPi/>

    <Lista/>

    <ValidarForm/>

    <InputControlado/>

 
  </>
 )
}
export default App
