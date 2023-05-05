import { AiFillAndroid } from "react-icons/ai";
import { AiFillApple } from "react-icons/ai";
import { BsWindows } from "react-icons/bs";
function Downloads() {
  return (
    <div>
      <h3 className="text-center text-3xl text-gray-50 md:text-left">DOWNLOAD ON</h3>
      <div className="flex justify-center items-center pt-5 text-gray-50 md:justify-start">
        <AiFillAndroid className="text-6xl mx-2 fill-current"/>
        <AiFillApple  className="text-6xl mx-2 fill-current"/>
        <BsWindows  className="text-6xl mx-2 fill-current"/>
      </div>
    </div>
  );
}

export default Downloads;
