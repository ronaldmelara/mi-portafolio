import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import SeccionInicio from './SeccionInicio'
import SeccionSobreMi from './SeccionSobreMi'
import SeccionHabilidades from './SeccionHabilidades'
import SeccionPortafolio from './SeccionPortafolio'
import SeccionContacto from './SeccionContacto'
import Footer from './footer'

function App() {
    const [count, setCount] = useState(0)
  
    return (
      <div className="App">
       <SeccionInicio/>

      <SeccionSobreMi/>
      
      <SeccionHabilidades/>

      <SeccionPortafolio/>
        
        <SeccionContacto/>

        <Footer/>
        </div>
    )
  }
  
  export default App