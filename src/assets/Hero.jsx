import Brand from "./Brand";
import Burger from "./Burger";
import Heading from "./Heading";
import Ads from "./Ads";
import Downloads from "./Downloads";
import HeroPhone from "./HeroPhone";
function Hero() {
  return (
    <section id="top" className=" bg-purple-700 ">
      <div className="flex justify-between items-center py-5 px-5">
        <Brand brandName="MIN" />
        <Burger />
      </div>
      <div className="pt-16 flex flex-col md:flex-row">
        <div className="md:w-6/12">
          <Heading
            title="MINIMA"
            titletext="The mobile platform app that helps you share journal with teams easily"
          />
          <Ads />
          <Downloads />
        </div>
        <div>
          <HeroPhone />
        </div>
      </div>
    </section>
  );
}

export default Hero;
