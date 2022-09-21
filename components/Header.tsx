import Image from 'next/image';
import logo from '../public/images/logo.svg';
// import hamburger from '../public/images/icon-hamburger.svg';
import { IoMenuSharp } from 'react-icons/io5';
import Hero from './Hero';
import { useState } from 'react';

function Header() {
  const [menu, setMenu] = useState(false);
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
        <div
          className="text-4xl text-Neutral-GrayishViolet sm:hidden"
          onClick={() => setMenu(!menu)}
        >
          {menu ? <IoMenuSharp /> : <IoMenuSharp />}
        </div>
        {menu && (
          <div className="sm:hidden   absolute left-0 top-24 z-30 w-[100%]  ">
            <div className="rounded-lg bg-Primary-DarkViolet mx-4 p-8 grid justify-items-center gap-4">
              <span className="text-white">Features</span>
              <span className="text-white">Pricing</span>
              <span className="text-white">Resources</span>
              <hr className="my-6 w-[90%] border-white/30" />
              <button className="w-full btn text-sm px-6 py-2 bg-Primary-DarkViolet text-white rounded-full">
                Login
              </button>
              <button className="w-full btn text-sm px-6 py-2 rounded-full">
                Sign Up
              </button>
            </div>
          </div>
        )}
      </div>
      <Hero />
    </>
  );
}
export default Header;
