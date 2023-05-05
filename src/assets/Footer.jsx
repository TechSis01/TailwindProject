import TopHeader from "./TopHeader";
import { ImFacebook } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { TfiGoogle } from "react-icons/tfi";
import { BsGlobe } from "react-icons/bs";
import { MdOutlineCopyright } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import Icons from "./icons";
function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 text-center py-14">
      <div className="flex w-6/12 mx-auto py-5 text-2xl">
        <Icons type={<ImFacebook />} />
        <Icons type={<BsTwitter />} />
        <Icons type={<TfiGoogle />} />
        <Icons type={<BsGlobe />} />
        <Icons type={<AiFillInstagram />} />
      </div>
      <a href="#top">Back to top </a>
      <div className="flex items-center justify-center">
        <MdOutlineCopyright />
        <TopHeader
          text="2016 by AlfaPress. All Rights Reserved"
          beauty="py-5"
        />
      </div>
    </footer>
  );
}

export default Footer;
