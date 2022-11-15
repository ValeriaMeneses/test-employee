import { Link, NavLink } from 'react-router-dom';
import EmpleadosIcon from '../assets/empleados.png';

export const NavBarComponent = () => {
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-light bg-info bg-gradient">
                <Link className="navbar-brand text-white" to="/employees">
                    <img src={ EmpleadosIcon } width="30" height="30" className="d-inline-block align-top mr-2" alt="Github"/>
                    EmpleadosApp
                </Link>
                <button className="navbar-toggler ml-2" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav gs-navbar">
                        <NavLink
                            className={({ isActive }) => `nav-item nav-link ${ isActive ? 'active' : ''}`}
                            to="/employees"
                        >
                            Empleados
                        </NavLink>
                    </ul>
                </div>
            </nav>
		</>
	)
}

export default NavBarComponent;

