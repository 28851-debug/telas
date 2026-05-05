import { useState } from 'react'
import pessoas from './assets/pessoas.jpg'
import logo from './assets/logo.avif'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <main>
      <div id='esq'></div>
      
    <div id='dir'>
      <img src= {logo} alt="logo" id='logo' />
      <h1>Fazer login</h1>
      <p>login</p>
      <input type="text" id='login'/>
      <p>senha</p>
      <input type="password" id='senha'/>
      <button>entrar</button>
      <a href="">esqueci meu login ou senha</a>
      
    </div>
    </main>

    </>
  )
}

export default App
