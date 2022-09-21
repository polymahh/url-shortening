import Image from 'next/image';
import logo from '../public/images/logo.svg';
// import hamburger from '../public/images/icon-hamburger.svg';
import { IoMenuSharp } from 'react-icons/io5';
import Hero from './Hero';

function Header() {
  return (
    <>
      <div className="flex justify-between sm:justify-end  items-center px-4 pt-[40px] maxw">
        <div>
          <Image src={logo} alt="logo" />
        </div>
        <div className="sm:flex gap-5 hidden flex-grow ml-8">
          <a className="headerLink">Features</a>
          <a className="headerLink">Pricing</a>
          <a className="headerLink">Resources</a>
        </div>
        <div className="sm:flex hidden">
          <button className="btn text-sm px-6 py-2 bg-white text-Neutral-GrayishViolet rounded-full">
            Login
          </button>
          <button className="btn text-sm px-6 py-2 rounded-full">
            Sign Up
          </button>
        </div>
        <div className="text-4xl text-Neutral-GrayishViolet sm:hidden">
          <IoMenuSharp />
        </div>
      </div>
      <Hero />
    </>
  );
}
export default Header;
