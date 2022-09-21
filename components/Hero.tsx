import Image from 'next/image';
import illustration from '../public/illustration-working.svg';

function Hero() {
  return (
    <div className="grid items-center sm:grid-cols-2 px-4 pb-[160px] relative  maxw">
      <div className="-mr-36 mt-2 md:mt-[76px]   sm:col-start-2">
        <Image src={illustration} alt="illustration" objectFit="contain" />
      </div>

      <div className="flex flex-col items-center sm:block sm:row-start-1">
        <h1 className="title text-4xl my-4 px-2 md:text-6xl md:leading-[4rem]">
          More than just shorter links
        </h1>
        <p className="txt  mb-8 px-2">
          Build your brand&apos;s recognition and get detailed insights on how
          your links are performing.
        </p>
        <button className="btn rounded-full mx-auto px2 ">Get Started</button>
      </div>
    </div>
  );
}
export default Hero;
