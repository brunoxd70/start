import "../vendor/fontawesome-free/css/all.css";
import "../styles/css/sb-admin-2.css"

function Admin() {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                <div className="sidebar-brand-icon rotate-n-15">
                </div>
                <div className="sidebar-brand-text mx-5">Painel Principal</div>
            </a>
            <hr className="sidebar-divider my-0"></hr>

            <li className="nav-item active">
                <a className="nav-link" href="/">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></a>

            </li>

            <hr className="sidebar-divider"></hr>
            <li className="nav-item"></li>

            <li className="nav-item ">
                <a className="nav-link" href="/Chamada">
                    <i className="fas fa-fw fa-chart-area"></i>
                    <span>Chamada</span></a>
            </li>

            <li className="nav-item">
                <a className="nav-link" href="/Cadastro">
                    <i className="fas fa-fw fa-chart-area"></i>
                    <span>Cadastro</span></a>
            </li>


            <li className="nav-item">
                <a className="nav-link" href="/CriarEscala">
                    <i className="fas fa-fw fa-table"></i>
                    <span>Criar Escala</span></a>
            </li>

            <li className="nav-item ">
                <a className="nav-link" href="/ConsultaVisitante">
                    <i className="fas fa-fw fa-table"></i>
                    <span>Consulta Mem/Visi</span></a>
            </li>

        </ul>


    );
}

export default Admin;