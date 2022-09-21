import logo from 'public/images/logo.svg';
import Image from 'next/image';

function Footer() {
  return (
    <div className="flex flex-col items-center sm:items-start sm:grid sm:grid-flow-col p-12 justify-items-end text-white  maxw">
      <div className="justify-self-start my-6 invert mix-blend-plus-lighter">
        <Image src={logo} alt="logo" />
      </div>
      <div className="flex flex-col items-center sm:items-start gap-2">
        <span className="text-white my-6 font-bold">Features</span>
        <span>Link Shortening</span>
        <span>Branded Links</span>
        <span>Analytics</span>
      </div>
      <div className="flex flex-col items-center sm:items-start gap-1">
        <span className="text-white my-6 font-bold">Resources</span>
        <span>Blog</span>
        <span>Developers</span>
        <span>Support</span>
      </div>
      <div className="flex flex-col items-center sm:items-start gap-1">
        <span className="text-white my-6 font-bold">Company</span>
        <span>About</span>
        <span>Our Team</span>
        <span>Careers</span>
        <span>Contact</span>
      </div>
      <div className="py-6 flex items-start gap-4  ">
        <Image
          src="/images/icon-facebook.svg"
          alt="social"
          width={20}
          height={20}
        />
        <Image
          src="/images/icon-twitter.svg"
          alt="social"
          width={20}
          height={20}
        />
        <Image
          src="/images/icon-pinterest.svg"
          alt="social"
          width={20}
          height={20}
        />
        <Image
          src="/images/icon-instagram.svg"
          alt="social"
          width={20}
          height={20}
        />
      </div>
    </div>
  );
}
export default Footer;
