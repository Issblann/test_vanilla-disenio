import { ReactNode, useState } from 'react';
import logoHeader from '../assets/logo_header.svg';
import MenuNav from '../assets/menu-nav.svg';

type Link = {
  title: string;
  url: string;
};
export const Header = () => {
  const [open, setOpen] = useState(false);

  const handleOpenNav = () => {
    setOpen(!open);
  };
  const links: Link[] = [
    {
      title: 'Home',
      url: '/',
    },
    {
      title: 'Sección 2',
      url: '/seccion2',
    },
    {
      title: 'Sección 3',
      url: '/seccion3',
    },
  ];
  return (
    <header>
      <img src={logoHeader} alt="logo-header" />
      <svg
        className="d-md-none menu-nav"
        onClick={handleOpenNav}
        width="31"
        height="31"
        viewBox="0 0 31 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.16667 7.75H25.8333V10.3333H5.16667V7.75ZM5.16667 14.2083H25.8333V16.7917H5.16667V14.2083ZM5.16667 20.6667H25.8333V23.25H5.16667V20.6667Z"
          fill="white"
        />
      </svg>

      <nav className={`d-md-none ${open ? 'open' : 'closed'} nav-mobile`}>
        <ul>
          {links.map((link, i) => {
            return (
              <li key={i}>
                <a href={link.url}>{link.title}</a>
              </li>
            );
          })}
        </ul>
      </nav>

      <nav className="d-none d-md-block nav-desktop">
        <ul>
          {links.map((link, i) => {
            return (
              <li key={i}>
                <a href={link.url}>{link.title}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
