import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router} from 'react-router-dom'
import RoutesComponent from './routes/Routes'

function App() {
  

  return (
    <>
      <Router>
        <RoutesComponent />
      </Router>

      
    </>
  )
}

export default App
