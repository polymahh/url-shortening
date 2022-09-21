import Image from 'next/image';
import logo from '../public/images/logo.svg';
// import hamburger from '../public/images/icon-hamburger.svg';
import { IoMenuSharp } from 'react-icons/io5';
import Hero from './Hero';

function Header() {
  return (
    <>
      <div className="flex justify-between  px-4 pt-[40px]">
        <div>
          <Image src={logo} alt="logo" />
        </div>
        <div className="text-4xl text-Neutral-GrayishViolet">
          <IoMenuSharp />
        </div>
      </div>
      <Hero />
    </>
  );
}
export default Header;
