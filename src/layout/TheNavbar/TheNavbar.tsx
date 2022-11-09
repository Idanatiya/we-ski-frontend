import logo from '../../assets/logo.png';

import './TheNavbar.scss';

type Props = {
  children: JSX.Element;
};

function TheNavbar({ children }: Props) {
  return (
    <section className="navbar-container">
      <div className="logo-container">
        <img src={logo} alt="placer-logo" />
      </div>
      {children}
    </section>
  );
}

export default TheNavbar;
