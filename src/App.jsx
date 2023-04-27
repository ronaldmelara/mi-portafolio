

import SeccionInicio from './SeccionInicio'
import SeccionSobreMi from './SeccionSobreMi'
import SeccionHabilidades from './SeccionHabilidades'
import SeccionPortafolio from './SeccionPortafolio'
import SeccionContacto from './SeccionContacto'
import Footer from './footer'

function App() {

  
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