import {Link} from 'react';
import Logo from '../../assets/Logo-2.png';

const Navbar = () => {
  return (
    <header id="nav_bar">
      <div className="nav_container">
        <div className="logo">
          {/* <Link to="/"><img src={Logo} alt="company logo" /></Link>  */}
          <img src={Logo} alt="company logo" />
          
        </div>
        <div className="nav_list">
          <ul>
            <li></li>
          </ul>
          <ul>
            <li><a href="">Customer Service</a></li>
            <li><a href="">SignIn</a></li>
            <li><a href="">Register</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
