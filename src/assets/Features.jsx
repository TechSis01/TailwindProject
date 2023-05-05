import FeaturesBox from "./FeaturesBox";
import mobile from "../images/mobileview-removebg-preview.png";
import clock from "../images/clockk-removebg-preview.png";
import cylinder from "../images/cylinder-removebg-preview.png";
function Features() {
  return (
    <section className="flex flex-col justify-center items-center px-5">
      <FeaturesBox
        image={mobile}
        firstText="Minima Landing"
        header="Responsive Display"
        pitch="Proident sunt denim culpa qui officia dsaf deserunt mollit anim perspiciatis adelin malesuada sociosqu class aptent turpis mi aenean."
      />
      <FeaturesBox
        image={clock}
        firstText="Minima Landing"
        header="Quality Support"
        pitch="Proident sunt denim culpa qui officia dsaf deserunt mollit anim perspiciatis adelin malesuada sociosqu class aptent turpis mi aenean."
      />
      <FeaturesBox
        image={cylinder}
        firstText="Minima Landing"
        header="Ecommerce Features"
        pitch="Proident sunt denim culpa qui officia dsaf deserunt mollit anim perspiciatis adelin malesuada sociosqu class aptent turpis mi aenean."
      />
    </section>
  );
}

export default Features;
