import Admin from "../componentes/Admin";
import RodapePrincipal from "../componentes/RodapePrincipal"

function CriaEscala() {
    return (
        <div id="wrapper">

        <Admin/>
         
        <div id="content-wrapper" className="d-flex flex-column">
        
        <div id="content"> 
        
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        
        <ul className="navbar-nav ml-auto">
        <div className="topbar-divider d-none d-sm-block"></div>
     
        </ul>
        </nav>
      <div className="row justify-content-center">   
  

        </div>
        </div>
        <RodapePrincipal/>
       </div>  
    </div>
    );
  }
  
export default CriaEscala;