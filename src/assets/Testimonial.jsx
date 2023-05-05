import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Testimonial({data,beauty}) {
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
    <div className="contact-man">
      <Slider
        {...settings}
        className=" h-full py-14 bg-gray-900 bg-opacity-80 text-white "
      >
        {data.map((profile, index) => (
          <div key={index} className="mx-auto text-center px-5 leading-3xl">
            <p className="text-4xl py-5 text">{profile.text}</p>
            <p className={` ${beauty} text-xl py-5`}>{profile.name}</p>
            <p className="text-gray-300 italic">{profile.title}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}
export default Testimonial;
