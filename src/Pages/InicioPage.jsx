import Catalogo from '../Buttons/Catalogo'

import logo from '../assets/LogoClean.png'

import '../App.css'

function InicioPage() {
    return(
        <>
         <section id="center">
            <div className='principal'>
               <img
                className="logoPrincipal"
                src={logo}
                alt="Logo"
               />

               <div className='botones'>
                <Catalogo />
               </div>
            </div>
         </section>

         <section>
            <div>
                <footer>Todos los derechos reservados</footer>
            </div>
         </section>
        </>
    )
}

export default InicioPage