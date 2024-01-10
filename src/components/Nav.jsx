import { hamburger } from '../assets/icons';
import {headerLogo} from '../assets/images';
import { navLinks } from '../constant';

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29}/>
        </a>
        <ul className='flex justify-center items-center gap-10 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
              href={item.href}
              className='font-montserrat leading-normal text-lg text-slate-gray'>
              {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='hidden max-lg:block'>
          <img src={hamburger} width={25} height={25} alt="hamburger" className='text-primary'/>
        </div>
      </nav>
    </header>
  )
}

export default Nav