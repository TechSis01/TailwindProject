import TopHeader from "./TopHeader";
import { AiFillAndroid } from "react-icons/ai";
import { BsApple } from "react-icons/bs";
import AppStore from "./AppStore";
function DownloadSection() {
  let freeText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit distinctio autem consequatur deserunt nostrum vitae quibusdam totam, sit soluta repudiandae corrupti officiis natus, commodi vero excepturi nulla numquam delectus voluptate.";
  return (
    <section className="downloadSection ">
      <div className="bg-gray-900 h-full bg-opacity-80 py-10 px-10">
        <TopHeader
          text="Simple Solution. Built for Everyone."
          beauty="text-white font-bold text-4xl text-center py-5"
        />
        <TopHeader
          text={freeText}
          beauty="text-white text-2xl text-center py-5 leading-9 lg:w-6/12 mx-auto"
        />
        <div className="flex text-gray-50 justify-center items-center pt-10">
          <AppStore downloadIcon={<AiFillAndroid className="fill-current text-3xl"/>} text="Play Store" beauty="flex items-center mx-5 p-2 border-2 border-white rounded-full" />
          <AppStore downloadIcon={<BsApple  className="fill-current text-3xl "/>} text="App Store" beauty="flex items-center mx-5 p-2 border-2 border-white rounded-full"/>
        </div>
      </div>
    </section>
  );
}

export default DownloadSection;
