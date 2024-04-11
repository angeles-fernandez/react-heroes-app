import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth';
import { useContext } from 'react';

export const Navbar = () => {

    
    const {user, logout}= useContext(AuthContext);

    const navigate = useNavigate();


    const onLogout = () => {
        logout();
        navigate('/login', {
            replace: true,
        });
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            <div className="navbar-collapse">
                <div className="navbar-nav">
                    <NavLink
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`} to="/dc"
                    >
                        DC
                    </NavLink>
                    
                    <NavLink
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`} to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>
            <div >
                <ul className="navbar-nav ml-auto d-flex align-items-center">
                    <span className='nav-item nav-link text-primary'>{user?.name}</span>
                    <button
                        className='nav-item nav-link btn'
                        onClick={onLogout}> Logout</button>
                </ul>
            </div>
        </nav>
    )
}