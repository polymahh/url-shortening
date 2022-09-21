import Image from 'next/image';
import illustration from '../public/illustration-working.svg';

function Hero() {
  return (
    <div className="flex flex-col items-center mb-[88px] relative overflow-hidden">
      <div className="-mr-36 mt-2 pl-6">
        <Image src={illustration} alt="illustration" objectFit="cover" />
      </div>
      <h1 className="title text-4xl text-center my-4 px-2">
        More than just shorter links
      </h1>
      <p className="txt text-center mb-8 px-4">
        Build your brand&apos;s recognition and get detailed insights on how
        your links are performing.
      </p>
      <button className="btn rounded-full">Get Started</button>
    </div>
  );
}
export default Hero;
