import phone1 from "../images/header-1.png";
import phone2 from "../images/header-2.png";

function HeroPhone() {
  return (
      <div className="relative px-14 flex justify-center items-center py-14">
        <img
          src={phone1}
          className="relative z-10 right-10 w-9/12 md:w-full lg:w-10/12"
        ></img>
        <img
          src={phone2}
          className="absolute z-5 top-24 right-20 w-6/12 md:w-3/5 right-0 top-24 lg:top-24 w-6/12"
        ></img>
      </div>
  );
}

export default HeroPhone;
