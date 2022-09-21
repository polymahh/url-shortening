import Image from 'next/image';
import img1 from 'public/images/icon-brand-recognition.svg';
import img2 from 'public/images/icon-detailed-records.svg';
import img3 from 'public/images/icon-fully-customizable.svg';

function SectionTwo() {
  return (
    <div className="relative px-6 sm:flex gap-8 maxw ">
      <div className="flex flex-col items-center sm:items-start pb-12">
        <div className="bg-Primary-DarkViolet p-6 h-[88px] rounded-full z-20 -mb-[44px] mx-8 ">
          <Image src={img1} alt="img" />
        </div>
        <div className="bg-white px-8 rounded-lg pt-14 pb-10 z-10">
          <h2 className="title md:text-2xl md:text-left text-center">
            Brand Recognition
          </h2>
          <p className="txt text-center md:text-left text-base">
            Boost your brand recognition with each click. Generic links
            don&apos;t mean a thing. Branded links help instil confidence in
            your content.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center sm:items-start pb-12 sm:mt-12">
        <div className="bg-Primary-DarkViolet p-6 h-[88px] rounded-full z-20 -mb-[44px] mx-8 ">
          <Image src={img2} alt="img" />
        </div>
        <div className="bg-white px-8 rounded-lg pt-14 pb-10 z-10">
          <h2 className="title md:text-2xl md:text-left text-center">
            Detailed Records
          </h2>
          <p className="txt text-center md:text-left text-base">
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center sm:items-start pb-16 sm:pb-20 sm:mt-24">
        <div className="bg-Primary-DarkViolet p-5 w-[88px] h-[88px] rounded-full z-20 -mb-[44px] mx-8">
          <Image src={img3} alt="img" />
        </div>
        <div className="bg-white px-8 rounded-lg pt-14 pb-10 z-10">
          <h2 className="title md:text-2xl md:text-left text-center">
            Fully Customizable
          </h2>
          <p className="txt text-center md:text-left text-base ">
            Improve brand awareness and content discoverabilitu through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
      <div className="absolute bg-Primary-Cyan h-[80%] w-2 sm:h-2 sm:w-[80%] top-0 left-[calc(50%-4px)] sm:left-8 sm:top-[calc(40%-4px)] z-1"></div>
    </div>
  );
}
export default SectionTwo;
