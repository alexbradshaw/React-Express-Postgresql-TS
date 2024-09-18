import { NavLink } from 'react-router-dom';

import '../CSS/Navbar.css';

function Navbar() {
  return (
    <nav>
      <NavLink to={'/'}>Users</NavLink>
      <NavLink to={'/add'}>Add User</NavLink>
      <NavLink to={'/update'}>Update User</NavLink>
      <NavLink to={'/delete'}>Delete User</NavLink>
    </nav>
  );
}

export default Navbar;
