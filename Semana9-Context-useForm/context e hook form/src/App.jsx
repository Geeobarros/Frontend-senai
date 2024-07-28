import './App.css'
import UserForm from './components/UserForm'
import AuthProvider from './contexts/AuthContext'
import SignIn from './components/SignIn/SignIn'

function App() {
  

  return (
    <>
    <AuthProvider>

      <SignIn/>
      {/* <UserForm/> */}
    </AuthProvider>
      
    </>
  )
}

export default App
