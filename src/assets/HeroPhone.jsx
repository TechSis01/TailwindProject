import phone1 from "../images/header-1.png";
import phone2 from "../images/header-2.png";

function HeroPhone() {
  return (
      <div className="relative px-14 max-h-screen py-14">
        <img
          src={phone1}
          className="relative z-10 right-5 w-9/12"
        ></img>
        <img
          src={phone2}
          className="absolute z-5 top-24 right-20 w-6/12 md:w-10/12 md:-top-52"
        ></img>
      </div>
  );
}

export default HeroPhone;
