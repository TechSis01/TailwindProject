import ad from "../images/video1.jpg";
import demo from "../images/video2.jpg";
import { FiPlay } from "react-icons/fi";
function Ads() {
  return (
    <div className="flex flex-col py-8 sm:flex-row">
      <div className="pt-5 relative">
        <img src={ad} className="w-11/12 mx-auto rounded-xl"></img>
        <div className=" bg-white p-5 top-28 right-48 absolute rounded-full bg-opacity-80">
          <FiPlay className=" text-purple-700 fill-current text-3xl" />
        </div>
        <p className="text-gray-300 text-center pt-5">Watch the demo</p>
      </div>
      <div className="pt-5 relative">
        <img src={demo} className="w-11/12 mx-auto rounded-xl"></img>
        <div className=" bg-white p-5 top-28 right-48 absolute rounded-full bg-opacity-80">
          <FiPlay className=" text-purple-700 fill-current text-3xl" />
        </div>
        <p className="text-gray-300 text-center pt-5">Watch the ad</p>
      </div>
    </div>
  );
}

export default Ads;
