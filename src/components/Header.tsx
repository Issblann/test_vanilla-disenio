import { ReactNode } from 'react';
import logoHeader from '../assets/logo_header.svg';
import MenuNav from '../assets/menu-nav.svg';

type Link = {
  title: string;
  url: string;
};
export const Header = () => {
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
      <img src={MenuNav} alt="menu-Nav" />

      {/* <nav>
        <ul>
          {links.map((link, i) => {
            return (
              <li key={i}>
                <a href={link.url}>{link.title}</a>
              </li>
            );
          })}
        </ul>
      </nav> */}
    </header>
  );
};
