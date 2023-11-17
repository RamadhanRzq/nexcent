import Logo2 from "../assets/logo2.png";
import si1 from "../assets/si1.png";
import si2 from "../assets/si2.png";
import si3 from "../assets/si3.png";
import si4 from "../assets/si4.png";

export const FooterPage = () => {
  return (
    <div className="flex bg-secondary p-12">
      <div className="flex-col ml-[165px] mt-[64px] text-white">
        <img src={Logo2} alt="logo2" width={191} height={30} />
        <p className="mt-10">Copyright © 2020 Nexcent ltd.</p>
        <p className="mt-2">All rights reserved</p>
        <div className="flex gap-4 mt-10">
          <img src={si1} alt="social-icons1" width={32} height={32} />
          <img src={si2} alt="social-icons2" width={32} height={32} />
          <img src={si3} alt="social-icons3" width={32} height={32} />
          <img src={si4} alt="social-icons4" width={32} height={32} />
        </div>
      </div>
      <div className="flex-col ml-[284px] mt-[64px] text-white">
        <p className="text-Headline4 font-semibold">Company</p>
        <p className="mt-10">About Us</p>
        <p className="mt-2">Blog</p>
        <p className="mt-2">Contact Us</p>
        <p className="mt-2">Pricing</p>
        <p className="mt-2">Testimonials</p>
      </div>
      <div className="flex-col ml-[180px] mt-[64px] text-white">
        <p className="text-Headline4 font-semibold">Support</p>
        <p className="mt-10">Help Center</p>
        <p className="mt-2">Terms of service</p>
        <p className="mt-2">Legal</p>
        <p className="mt-2">Privacy policy</p>
        <p className="mt-2">Status</p>
      </div>
      <div className="flex-col ml-[280px] mt-[64px] text-white">
        <p className="text-Headline4 font-semibold">Stay up to date</p>
        <input type="text" className="bg-input mt-10 w-[255px] h-[40px] rounded-md text-white" placeholder="Your email address"></input>
      </div>
    </div>
  );
};
