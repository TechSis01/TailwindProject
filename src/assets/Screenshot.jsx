import TopHeader from "./TopHeader";
import Slider from "react-slick";
import phone1 from '../images/phoneCarousel.png'
import phone2 from '../images/PhoneCarousel2.png'
import phone3 from '../images/PhoneCarousel3.png'
function Screenshot() {
    const settings = {
        dots: true,
        dotsClass: "slick-dots slick-middle",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
      };
  return (
    <section className="py-24 px-5 lg:px-24">
      <TopHeader text="SCREENSHOT"
          beauty="text-purple-800 text-xl font-bold text-center py-5"/>
      <TopHeader text="Look app in Action"
          beauty="text-3xl font-bold text-center py-5"/>
      <TopHeader text="Aenean erat turpis,iaculis at ultricies eget, malesuada sed turpis class aptent taciti sociosqu ad litora torquent per conubia nostra per inceptos bibendum iacinia tunic himenaeous"
          beauty="text-2xl text-gray-500 text-center py-5"/>
        <Slider {...settings} className="py-10">
            <div>
                <img src={phone1}></img>
            </div>
            <div>
                <img src={phone2}></img>
            </div>
            <div>
                <img src={phone3}></img>
            </div>
        </Slider>
    </section>
  );
}

export default Screenshot;
