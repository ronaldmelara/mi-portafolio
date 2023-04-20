import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import SeccionInicio from './SeccionInicio'
import SeccionSobreMi from './SeccionSobreMi'
import SeccionHabilidades from './SeccionHabilidades'
import SeccionPortafolio from './SeccionPortafolio'

function App() {
    const [count, setCount] = useState(0)
  
    return (
      <div className="App">
       <SeccionInicio/>

      <SeccionSobreMi/>
      
      <SeccionHabilidades/>

      <SeccionPortafolio/>
        
        </div>
    )
  }
  
  export default App