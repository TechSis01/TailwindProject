import TopHeader from "./assets/TopHeader";
import MiniFeatures from "./assets/MiniFeatures";
import padlock from "./images/padlock-removebg-preview.png";
import mobileapp from "./images/mobileapps-removebg-preview.png";
import emoji from "./images/emoji-removebg-preview.png";
import cloud from "./images/cloudhost.png";
import slantPhone from "./images/iphoneSlant.png";
function MiniSection() {
  return (
    <section className="bg-neutral-100 py-24 px-24 flex flex-col items-center md:flex-row justify-between">
      <div className="md:w-8/12">
        <TopHeader
          text="MINIMALIST"
          beauty="text-purple-800 text-xl font-bold text-center py-5 md:text-left"
        />
        <TopHeader
          text="ANYTIME,ANYWHERE"
          beauty="text-3xl font-bold text-center py-5 md:text-left"
        />
        <TopHeader
          text="Mauris in dolor arcu volupat quis interdum sit orci vulputate quque elementun telluse dolor dictum maruis"
          beauty="text-2xl text-gray-500 text-center py-5 md:text-left"
        />
        <div className="md:grid grid-cols-2 ">
          <MiniFeatures
            photo={mobileapp}
            header="Mobile apps"
            text="Mauris in dolor arcu volupat quis interdum sit orci"
            beauty="flex flex-col justify-center items-center py-5 md:items-start md:flex-row"
          />
          <MiniFeatures
            photo={padlock}
            header="Secure codes"
            text="Mauris in dolor arcu volupat quis interdum sit orci"
            beauty="flex flex-col justify-center items-center py-5  md:items-start md:flex-row"
          />
          <MiniFeatures
            photo={emoji}
            header="Easy to Use"
            text="Mauris in dolor arcu volupat quis interdum sit orci"
            beauty="flex flex-col justify-center items-center py-5  md:flex-row md:items-start"
          />
          <MiniFeatures
            photo={cloud}
            header="Cloud hosting"
            text="Mauris in dolor arcu volupat quis interdum sit orci"
            beauty="flex flex-col justify-center items-center py-5 md:flex-row md:items-start"
          />
        </div>
      </div>
      <div className="md:w-5/12 pl-5">
        <img src={slantPhone}></img>
      </div>
    </section>
  );
}

export default MiniSection;
