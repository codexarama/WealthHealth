import logoDesign from '../../assets/HRnet_logo-design.svg';
import logoBrand from '../../assets/HRnet_logo-brand.svg';
import icoList from '../../assets/ico-list.svg';
import icoAdd from '../../assets/ico-user-add.svg';

import { useLocation, Link } from 'react-router-dom';

import './navbar.css';

export default function Navbar() {
  const path = useLocation().pathname;
  // console.log(path);

  return (
    <>
      <nav>
        <div className="nav-item nav-brand">
          <img
            className="nav-logo-design"
            src={logoDesign}
            alt="Health Wealth logo design"
          />
          <img
            className="nav-logo-brand"
            src={logoBrand}
            alt="Health Wealth logo brand name"
          />
        </div>
        <div className="nav-item nav-menu">
          <h1>HRnet Employees</h1>
          {path === '/' ? (
            <Link to='/employees' className="nav-menu-choice">
              <img
                className="nav-ico"
                src={icoList}
                alt="Health Wealth logo brand name"
              />
              <span>Current</span>
            </Link>
          ) : (
            <Link to='/' className="nav-menu-choice">
              <img
                className="nav-ico"
                src={icoAdd}
                alt="Health Wealth logo brand name"
              />
              <span>Create</span>
            </Link>
          )}
        </div>
      </nav>
      <hr className="nav-shadow" />
    </>
  );
}